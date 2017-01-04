---------------------------------------------------------------------------------
--                      Copyright (C) 2016 wystan
--
--        filename: pg.sql
--     description: postgre sql study for me only
--         created: 2016-02-19 11:31:12
--          author: wystan
-- 
---------------------------------------------------------------------------------

-- website: http://www.postgresql.org/docs/
-- some useful commands:
--      createdb [$dbname]
--      createuser [$username]
--      psql -f pg.sql
--      psql [-U $user] [$db] -c "select * from $table"
--      psql -l
--      psql commands:
--           \?  - for the help of '\xxx' commands
--           \h  - for the help of sql statements
--           \q  - exit
--           \d  - list tables sequences and views.
--           \d name - describe the table of 'name'
--           \dg - list roles

-- DATABASE
drop database if exists pg_wystan;
create database pg_wystan;
\c pg_wystan


-- USER
drop user if exists pg_wystan;
create user pg_wystan with createdb login password '123456';


-- TABLE
create table dbtype (
    id              serial not null,
    name            char(16) not null,
    description     varchar(128) default null,
    age             int default 0 check(age >= 0),
    length          float default 0.0,
    money           float8 default 0.0,
    birthday        date default null,
    birthtime       timestamp default null,
    primary key(id)
);


-- INDEX
create unique index dbtype_name on dbtype (name);
create index dbtype_birthday on dbtype (birthday);


-- OPERATIONS
insert into dbtype(name) values('unix');
insert into dbtype(name) values('linux');
insert into dbtype(name) values('osx');
insert into dbtype(name) values('unknown');
update dbtype set description = 'mac os el capitan' where name='osx';
delete from dbtype where name='unknown';
-- tips: offset start from 0 but not 1
select * from dbtype limit 2 offset 0;
table dbtype;


-- VIEW
create view os as select distinct name, description, 'os' as type from dbtype order by name;
select * from os;


-- FUNCTION or PROCEDURE
create or replace function show_me(id int, name char(8)) returns varchar(32) as $$
    declare 
        ret varchar := '';
        count int := 0;
        onerow record;
        one dbtype%rowtype;

        xint int[] := array[1,2];
        x int := 0;

        cur scroll cursor for select * from dbtype order by id;
    begin
        ret := name || '-' || id;

        -- case control
        case name 
        when 'osx' then 
            ret = 'this is osx';
        when 'linux' then
            ret = 'this is linux';
        else
            ret = 'unknown';
        end case;

        -- if control
        if name = 'linux' then
            ret = 'linux os';
        elseif name = 'osx' then
            ret = 'osx os';
        else
            ret = 'unknown';
        end if;

        -- loop
        loop
            count = count + 1;
            exit when count > 10;
        end loop;
        raise notice 'count = %', count;

        -- while loop
        count = 0;
        while count < 10 loop
            count = count + 2;
        end loop;
        raise notice 'after while count = %', count;

        -- for
        for i in 1..10 loop
            raise notice 'for in %', i;
        end loop;
        for i in reverse 10..0 by 2 loop
            raise notice 'for by 2 in: %', i;
        end loop;
        for one in select * from dbtype loop
            raise info 'row=%,%', one.id, one.name;
        end loop;
        foreach x in array xint 
        loop
            raise info 'xint=%', x;
        end loop;

        -- cursor
        -- don't need to open cur here
        for one in cur loop
            raise info 'cursor: row=%,%', one.id, one.name;
        end loop;
        open cur;
        move first from cur;
        update dbtype set description='it is a unix' where current of cur;
        close cur;

        return ret;
    end;
$$ language plpgsql;
select show_me(1, 'osx') as name;
select * from dbtype order by id;


-- TRIGGER
create or replace function check_name() returns trigger as $$
    declare
        len int := 0;
    begin
        if tg_op = 'INSERT' or tg_op = 'UPDATE' then
            len = char_length(new.name);
            if len = 0 or len > 8 then
                raise exception 'invalid name % length=% should be [0, 8]', new.name, len;
            end if;
        end if;
        return new;
    end;
$$ language plpgsql;
create trigger check_name before insert or update on dbtype 
    for each row execute procedure check_name();


-- PRIVILEGE (grant xxx on xx to xx)

-- TRANSACTION
begin;
    select * from dbtype;
    --rollback;
commit;


---------------------------------------------------------------------------------
