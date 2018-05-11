## epoll_wait on connecting fd
> 在一个NONBLOCKING的fd上调用connect时，如果正常，系统会返回一个EINPROGRESS的错误码（标识系统正在进行TCP的三次握手操作），然后对这个fd调用epoll_wait，当连接成功后，epoll会返回，其中EPOLLOUT会被设置，这个时候调用getsockopt访问SO_ERROR等于0标识连接成功；

## epoll_wait on closing fd
> 在一个NONBLOCKING的socket fd上调用epool_wait等待EPOLLIN的时候，如果对端关闭了socket，这个时候epoll_wait会返回，EPOLLIN会被设置，但读到的数据长度为0

