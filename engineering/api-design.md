# Aspect for back-end design

- Domain Name;
- Port Allocation: end-user port, ops port, inner-service port;
- Deployment Design;
- Protocols: end-user, ops, inner-service;
- Data structure;
- Interaction Sequence;
- Capacity Design;
- Co-currency Design;
- Cache Design;
- Storage Design;
- Stateless Design;
- High Availability Design;
- Log Design;
- Error code design: external error; internal error; (including error numbers and descriptions)

# Exceptions

- Connectivity: 
  - PING between server and client; 
  - connect timeout
  - disconnected during communications; 
  - route disconnected during communications
- Request timeout

# Data validation
- string
  - length
  - charset
  - encoding (utf8/gbk/...)
- long/int/float
  - max, min
  - default
- enum
  - scope

