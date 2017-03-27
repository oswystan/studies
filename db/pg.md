## performance test
    psql $dbname -c "explain select * from $table;"
    psql $dbname -c "explain analyze $db select * from $table;"

    pgbench

## metadata of database
there are some tables contains the metadata of postgre sql engine.

    pg_database - 
    pg_tables   - 
    pg_roles    - 
    pg_user     - 

## backup and restore

```
    ## commands that you can use:  pg_dump / pg_dumpall / pg_restore
    
    ## do backup
    pg_dump $db > db.sql
    
    ## restore database
    psql -c "create database if not existed $newdb"
    psql -d $newdb -f ./db.sql

```

## import data from csv

```
    # first backup data in table(use absolute path for file).
    copy $table_name to '$path_to_file' csv  header delimiter ',';
    
    #disble triggers => import data => enable triggers
    alter table $table_name disable trigger all / $trigger_name;
    copy $table_name from a.csv csv header delimiter ',';
    alter table $table_name enable trigger all / $trigger_name;
    
    # set the sequence value for future inserting data
    select setval('$sequence_name', $seq, true);
```

## start server

```
    initdb /usr/local/var/postgres -E utf8
    pg_ctl -D /usr/local/var/postgres -l /usr/local/var/postgres/server.log start
    createdb $dbname
```


## connections

```
    /usr/local/var/postgres/postgresql.conf: max_connections
```

## locks
