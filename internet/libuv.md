##　成对编程
### UDP
- fd: uv_udp_init() - uv_close()
- monitor: uv_udp_recv_start() - uv_udp_recv_stop()
- memory: uv_udp_send_cb() + uv_udp_recv_cb() - uv_alloc_cb()

### loop
- uv_loop_t: uv_run() - uv_stop()

## memory control
libuv没有现成的内存管理机制，需要APP自己负责内存的管理工作，可以使用memory pool的概念来管理碎片化的内存申请和释放。