+++
title = "strace with ChatGPT"
date = "2023-09-16"
slug = "strace-with-chatgpt"
tags = ["llm", "linux", "programming", "systems-programming"]
+++

Since ChatGPT is the trend of the moment, I had to check it out. There is a lot
to say about it in general, but that won't be the focus of this post.

Recently at work, a colleague asked how he could observe what files a process
accesses, without modifying the program. Tracing tools like `strace` are the
best answer I know to that question, and they apply to a lot more than
observing file system access. The problem is, the `strace` output is great once
you get used to it, but it's really an acquired taste likely to drive first
time users away.

I try to find situations where LLMs can help me and others, and this struck me
as one of them.

This post has two points: telling or reminding people how useful `strace` is,
and showing one situation where today's LLMs are nice to have in your toolbox.

# strace (and dtrace)

The [`strace`](https://strace.io/) command can wrap, or attach itself to, a
process with the
[`ptrace`](https://man7.org/linux/man-pages/man2/ptrace.2.html) syscall, and
record what [system calls](https://en.wikipedia.org/wiki/System_call) are
issued by the process.

[dtrace](https://en.wikipedia.org/wiki/DTrace) is a whole framework for tracing that can do a lot more, but we'll stick with `strace` in this post.

[ltrace](https://en.wikipedia.org/wiki/Ltrace) is similar to strace, but instead of tracing system calls, it traces calls to dynamically linked libraries.

> ℹ️ I haven't tried it because _I use NixOS™_, but [`dtruss`](https://www.brendangregg.com/dtrace.html) is supposed to be the MacOS equivalent of `strace`.

Let's see `strace` in action. We write and compile the following Rust program:

```rust
use std::{
    fs,
    io::{self, Write as _},
};

fn main() -> io::Result<()> {
    let mut file = fs::File::create("hello.txt")?;
    file.write_all("早安！".as_bytes())
}
```

and execute it with `strace`:

```bash
$ strace -- ./target/release/open-file
```

Here's the output:

```
execve("../target/release/open-file", ["../target/release/open-file"], 0x7ffe704db5a8 /* 190 vars */) = 0
brk(NULL)                               = 0x56447b159000
arch_prctl(0x3001 /* ARCH_??? */, 0x7ffef4579210) = -1 EINVAL (Invalid argument)
mmap(NULL, 8192, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_ANONYMOUS, -1, 0) = 0x7f1db3c2a000
access("/etc/ld-nix.so.preload", R_OK)  = -1 ENOENT (No such file or directory)
openat(AT_FDCWD, "/home/tom/src/gh/prisma-engines/outputs/out/lib/glibc-hwcaps/x86-64-v3/libgcc_s.so.1", O_RDONLY|O_CLOEXEC) = -1 ENOENT (No such file or directory)
newfstatat(AT_FDCWD, "/home/tom/src/gh/prisma-engines/outputs/out/lib/glibc-hwcaps/x86-64-v3", 0x7ffef4578440, 0) = -1 ENOENT (No such file or directory)
openat(AT_FDCWD, "/home/tom/src/gh/prisma-engines/outputs/out/lib/glibc-hwcaps/x86-64-v2/libgcc_s.so.1", O_RDONLY|O_CLOEXEC) = -1 ENOENT (No such file or directory)
newfstatat(AT_FDCWD, "/home/tom/src/gh/prisma-engines/outputs/out/lib/glibc-hwcaps/x86-64-v2", 0x7ffef4578440, 0) = -1 ENOENT (No such file or directory)
openat(AT_FDCWD, "/home/tom/src/gh/prisma-engines/outputs/out/lib/libgcc_s.so.1", O_RDONLY|O_CLOEXEC) = -1 ENOENT (No such file or directory)
newfstatat(AT_FDCWD, "/home/tom/src/gh/prisma-engines/outputs/out/lib", 0x7ffef4578440, 0) = -1 ENOENT (No such file or directory)
openat(AT_FDCWD, "/nix/store/3n58xw4373jp0ljirf06d8077j15pc4j-glibc-2.37-8/lib/glibc-hwcaps/x86-64-v3/libgcc_s.so.1", O_RDONLY|O_CLOEXEC) = -1 ENOENT (No such file or directory)
newfstatat(AT_FDCWD, "/nix/store/3n58xw4373jp0ljirf06d8077j15pc4j-glibc-2.37-8/lib/glibc-hwcaps/x86-64-v3", 0x7ffef4578440, 0) = -1 ENOENT (No such file or directory)
openat(AT_FDCWD, "/nix/store/3n58xw4373jp0ljirf06d8077j15pc4j-glibc-2.37-8/lib/glibc-hwcaps/x86-64-v2/libgcc_s.so.1", O_RDONLY|O_CLOEXEC) = -1 ENOENT (No such file or directory)
newfstatat(AT_FDCWD, "/nix/store/3n58xw4373jp0ljirf06d8077j15pc4j-glibc-2.37-8/lib/glibc-hwcaps/x86-64-v2", 0x7ffef4578440, 0) = -1 ENOENT (No such file or directory)
openat(AT_FDCWD, "/nix/store/3n58xw4373jp0ljirf06d8077j15pc4j-glibc-2.37-8/lib/libgcc_s.so.1", O_RDONLY|O_CLOEXEC) = -1 ENOENT (No such file or directory)
newfstatat(AT_FDCWD, "/nix/store/3n58xw4373jp0ljirf06d8077j15pc4j-glibc-2.37-8/lib", {st_mode=S_IFDIR|0555, st_size=4096, ...}, 0) = 0
openat(AT_FDCWD, "/nix/store/v286z87irid5vn13y2z6fphfrzmgj0kf-gcc-12.3.0-lib/lib/glibc-hwcaps/x86-64-v3/libgcc_s.so.1", O_RDONLY|O_CLOEXEC) = -1 ENOENT (No such file or directory)
newfstatat(AT_FDCWD, "/nix/store/v286z87irid5vn13y2z6fphfrzmgj0kf-gcc-12.3.0-lib/lib/glibc-hwcaps/x86-64-v3", 0x7ffef4578440, 0) = -1 ENOENT (No such file or directory)
openat(AT_FDCWD, "/nix/store/v286z87irid5vn13y2z6fphfrzmgj0kf-gcc-12.3.0-lib/lib/glibc-hwcaps/x86-64-v2/libgcc_s.so.1", O_RDONLY|O_CLOEXEC) = -1 ENOENT (No such file or directory)
newfstatat(AT_FDCWD, "/nix/store/v286z87irid5vn13y2z6fphfrzmgj0kf-gcc-12.3.0-lib/lib/glibc-hwcaps/x86-64-v2", 0x7ffef4578440, 0) = -1 ENOENT (No such file or directory)
openat(AT_FDCWD, "/nix/store/v286z87irid5vn13y2z6fphfrzmgj0kf-gcc-12.3.0-lib/lib/libgcc_s.so.1", O_RDONLY|O_CLOEXEC) = 3
read(3, "\177ELF\2\1\1\0\0\0\0\0\0\0\0\0\3\0>\0\1\0\0\0\0\0\0\0\0\0\0\0"..., 832) = 832
newfstatat(3, "", {st_mode=S_IFREG|0444, st_size=141696, ...}, AT_EMPTY_PATH) = 0
mmap(NULL, 131400, PROT_READ, MAP_PRIVATE|MAP_DENYWRITE, 3, 0) = 0x7f1db3c09000
mmap(0x7f1db3c0d000, 94208, PROT_READ|PROT_EXEC, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0x4000) = 0x7f1db3c0d000
mmap(0x7f1db3c24000, 16384, PROT_READ, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0x1b000) = 0x7f1db3c24000
mmap(0x7f1db3c28000, 8192, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0x1e000) = 0x7f1db3c28000
close(3)                                = 0
openat(AT_FDCWD, "/nix/store/3n58xw4373jp0ljirf06d8077j15pc4j-glibc-2.37-8/lib/libc.so.6", O_RDONLY|O_CLOEXEC) = 3
read(3, "\177ELF\2\1\1\3\0\0\0\0\0\0\0\0\3\0>\0\1\0\0\0\220<\2\0\0\0\0\0"..., 832) = 832
pread64(3, "\6\0\0\0\4\0\0\0@\0\0\0\0\0\0\0@\0\0\0\0\0\0\0@\0\0\0\0\0\0\0"..., 784, 64) = 784
newfstatat(3, "", {st_mode=S_IFREG|0555, st_size=2252696, ...}, AT_EMPTY_PATH) = 0
pread64(3, "\6\0\0\0\4\0\0\0@\0\0\0\0\0\0\0@\0\0\0\0\0\0\0@\0\0\0\0\0\0\0"..., 784, 64) = 784
mmap(NULL, 1990000, PROT_READ, MAP_PRIVATE|MAP_DENYWRITE, 3, 0) = 0x7f1db3a23000
mmap(0x7f1db3a45000, 1413120, PROT_READ|PROT_EXEC, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0x22000) = 0x7f1db3a45000
mmap(0x7f1db3b9e000, 360448, PROT_READ, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0x17b000) = 0x7f1db3b9e000
mmap(0x7f1db3bf6000, 24576, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0x1d3000) = 0x7f1db3bf6000
mmap(0x7f1db3bfc000, 52592, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_FIXED|MAP_ANONYMOUS, -1, 0) = 0x7f1db3bfc000
close(3)                                = 0
mmap(NULL, 12288, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_ANONYMOUS, -1, 0) = 0x7f1db3a20000
arch_prctl(ARCH_SET_FS, 0x7f1db3a20740) = 0
set_tid_address(0x7f1db3a20a10)         = 33164
set_robust_list(0x7f1db3a20a20, 24)     = 0
rseq(0x7f1db3a21060, 0x20, 0, 0x53053053) = 0
mprotect(0x7f1db3bf6000, 16384, PROT_READ) = 0
mprotect(0x7f1db3c28000, 4096, PROT_READ) = 0
mprotect(0x5644791eb000, 12288, PROT_READ) = 0
mprotect(0x7f1db3c5d000, 8192, PROT_READ) = 0
prlimit64(0, RLIMIT_STACK, NULL, {rlim_cur=8192*1024, rlim_max=RLIM64_INFINITY}) = 0
poll([{fd=0, events=0}, {fd=1, events=0}, {fd=2, events=0}], 3, 0) = 0 (Timeout)
rt_sigaction(SIGPIPE, {sa_handler=SIG_IGN, sa_mask=[PIPE], sa_flags=SA_RESTORER|SA_RESTART, sa_restorer=0x7f1db3a5bd30}, {sa_handler=SIG_DFL, sa_mask=[], sa_flags=0}, 8) = 0
rt_sigaction(SIGSEGV, NULL, {sa_handler=SIG_DFL, sa_mask=[], sa_flags=0}, 8) = 0
rt_sigaction(SIGSEGV, {sa_handler=0x5644791c5f70, sa_mask=[], sa_flags=SA_RESTORER|SA_ONSTACK|SA_SIGINFO, sa_restorer=0x7f1db3a5bd30}, NULL, 8) = 0
rt_sigaction(SIGBUS, NULL, {sa_handler=SIG_DFL, sa_mask=[], sa_flags=0}, 8) = 0
rt_sigaction(SIGBUS, {sa_handler=0x5644791c5f70, sa_mask=[], sa_flags=SA_RESTORER|SA_ONSTACK|SA_SIGINFO, sa_restorer=0x7f1db3a5bd30}, NULL, 8) = 0
sigaltstack(NULL, {ss_sp=NULL, ss_flags=SS_DISABLE, ss_size=0}) = 0
mmap(NULL, 12288, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_ANONYMOUS|MAP_STACK, -1, 0) = 0x7f1db3a1d000
mprotect(0x7f1db3a1d000, 4096, PROT_NONE) = 0
sigaltstack({ss_sp=0x7f1db3a1e000, ss_flags=0, ss_size=8192}, NULL) = 0
getrandom("\xfa\x6f\x2f\x71\x31\xf7\x86\x14", 8, GRND_NONBLOCK) = 8
brk(NULL)                               = 0x56447b159000
brk(0x56447b17a000)                     = 0x56447b17a000
openat(AT_FDCWD, "/proc/self/maps", O_RDONLY|O_CLOEXEC) = 3
prlimit64(0, RLIMIT_STACK, NULL, {rlim_cur=8192*1024, rlim_max=RLIM64_INFINITY}) = 0
newfstatat(3, "", {st_mode=S_IFREG|0444, st_size=0, ...}, AT_EMPTY_PATH) = 0
read(3, "5644791a6000-5644791b5000 r--p 0"..., 1024) = 1024
read(3, "0 fe:00 27302446                "..., 1024) = 1024
read(3, "2.3.0-libgcc/lib/libgcc_s.so.1\n7"..., 1024) = 1024
read(3, "ef4580000 rw-p 00000000 00:00 0 "..., 1024) = 309
close(3)                                = 0
sched_getaffinity(33164, 32, [0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19]) = 8
openat(AT_FDCWD, "hello.txt", O_WRONLY|O_CREAT|O_TRUNC|O_CLOEXEC, 0666) = 3
write(3, "\346\227\251\345\256\211\357\274\201", 9) = 9
close(3)                                = 0
sigaltstack({ss_sp=NULL, ss_flags=SS_DISABLE, ss_size=8192}, NULL) = 0
munmap(0x7f1db3a1d000, 12288)           = 0
exit_group(0)                           = ?
+++ exited with 0 +++

```

Holy wall of text, Batman!

Looking a bit closer, it doesn't need to be scary if you already have a passing
familiarity with system calls. It's one system call per line, with its
arguments and return value. You get used to reading that sort of things, and
with practice it becomes natural. You know what to ignore and what
to look for, and how to open the manpages for the system calls you don't know.

In this example, the lines that correspond to the `main()` we wrote are:

```
openat(AT_FDCWD, "hello.txt", O_WRONLY|O_CREAT|O_TRUNC|O_CLOEXEC, 0666) = 3
write(3, "\346\227\251\345\256\211\357\274\201", 9) = 9
close(3)
```

On three lines:

- open (`openat`) the `hello.txt` file, with a bunch of flags. That returns a [file descriptor](https://en.wikipedia.org/wiki/File_descriptor), in this case 3 (`= 3` at the end of the line).
- Then a call to `write` to... write "早安！" to the file. Each character is three bytes, and we see indeed that `write` returns `= 9`, the number of bytes written to the file descriptor. The first argument to `write` is the file descriptor we got from `openat`.
- The `Drop` impl for `std::fs::File` closes the file when `file` is dropped at the end of `main()`. That translates to a `close(3)` system call.

# strace with ChatGPT

Now let's try something: open the [Janet](https://janet-lang.org/) REPL and execute `(print "hi")`. Now let's feed the `strace` output to GPT-4 and ask it to explain:

Prompt:

> Here's the strace output for a program I ran, can you explain what it did?
>
> execve("/nix/store/d0i0h0wb2mcjlhxk7bn08riw4ja4fxhl-janet-1.29.1/bin/janet", ["janet"], 0x7ffce90bb248 /* 86 vars */) = 0
> brk(NULL)                               = 0x1afc000
> arch_prctl(0x3001 /* ARCH_??? */, 0x7ffcbebfd460) = -1 EINVAL (Invalid argument)
> mmap(NULL, 8192, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_ANONYMOUS, -1, 0) = 0x7f61cd0f3000
> access("/etc/ld-nix.so.preload", R_OK)  = -1 ENOENT (No such file or directory)
> openat(AT_FDCWD, "/nix/store/ibp4camsx1mlllwzh32yyqcq2r2xsy1a-glibc-2.37-8/lib/glibc-hwcaps/x86-64-v3/libm.so.6", O_RDONLY|O_CLOEXEC) = -1 ENOENT (No such file or directory)
> newfstatat(AT_FDCWD, "/nix/store/ibp4camsx1mlllwzh32yyqcq2r2xsy1a-glibc-2.37-8/lib/glibc-hwcaps/x86-64-v3", 0x7ffcbebfc690, 0) = -1 ENOENT (No such file or directory)
> openat(AT_FDCWD, "/nix/store/ibp4camsx1mlllwzh32yyqcq2r2xsy1a-glibc-2.37-8/lib/glibc-hwcaps/x86-64-v2/libm.so.6", O_RDONLY|O_CLOEXEC) = -1 ENOENT (No such file or directory)
> newfstatat(AT_FDCWD, "/nix/store/ibp4camsx1mlllwzh32yyqcq2r2xsy1a-glibc-2.37-8/lib/glibc-hwcaps/x86-64-v2", 0x7ffcbebfc690, 0) = -1 ENOENT (No such file or directory)
> openat(AT_FDCWD, "/nix/store/ibp4camsx1mlllwzh32yyqcq2r2xsy1a-glibc-2.37-8/lib/libm.so.6", O_RDONLY|O_CLOEXEC) = 3
> read(3, "\177ELF\2\1\1\3\0\0\0\0\0\0\0\0\3\0>\0\1\0\0\0\0\0\0\0\0\0\0\0"..., 832) = 832
> newfstatat(3, "", {st_mode=S_IFREG|0555, st_size=998104, ...}, AT_EMPTY_PATH) = 0
> mmap(NULL, 913432, PROT_READ, MAP_PRIVATE|MAP_DENYWRITE, 3, 0) = 0x7f61cd013000
> mmap(0x7f61cd021000, 475136, PROT_READ|PROT_EXEC, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0xe000) = 0x7f61cd021000
> mmap(0x7f61cd095000, 376832, PROT_READ, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0x82000) = 0x7f61cd095000
> mmap(0x7f61cd0f1000, 8192, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0xde000) = 0x7f61cd0f1000
> close(3)                                = 0
> openat(AT_FDCWD, "/nix/store/ibp4camsx1mlllwzh32yyqcq2r2xsy1a-glibc-2.37-8/lib/libc.so.6", O_RDONLY|O_CLOEXEC) = 3
> read(3, "\177ELF\2\1\1\3\0\0\0\0\0\0\0\0\3\0>\0\1\0\0\0\220<\2\0\0\0\0\0"..., 832) = 832
> pread64(3, "\6\0\0\0\4\0\0\0@\0\0\0\0\0\0\0@\0\0\0\0\0\0\0@\0\0\0\0\0\0\0"..., 784, 64) = 784
> newfstatat(3, "", {st_mode=S_IFREG|0555, st_size=2252696, ...}, AT_EMPTY_PATH) = 0
> pread64(3, "\6\0\0\0\4\0\0\0@\0\0\0\0\0\0\0@\0\0\0\0\0\0\0@\0\0\0\0\0\0\0"..., 784, 64) = 784
> mmap(NULL, 1990000, PROT_READ, MAP_PRIVATE|MAP_DENYWRITE, 3, 0) = 0x7f61cce2d000
> mmap(0x7f61cce4f000, 1413120, PROT_READ|PROT_EXEC, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0x22000) = 0x7f61cce4f000
> mmap(0x7f61ccfa8000, 360448, PROT_READ, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0x17b000) = 0x7f61ccfa8000
> mmap(0x7f61cd000000, 24576, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0x1d3000) = 0x7f61cd000000
> mmap(0x7f61cd006000, 52592, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_FIXED|MAP_ANONYMOUS, -1, 0) = 0x7f61cd006000
> close(3)                                = 0
> mmap(NULL, 16384, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_ANONYMOUS, -1, 0) = 0x7f61cce29000
> arch_prctl(ARCH_SET_FS, 0x7f61cce2b100) = 0
> set_tid_address(0x7f61cce2b3d0)         = 10093
> set_robust_list(0x7f61cce2b3e0, 24)     = 0
> rseq(0x7f61cce2ba20, 0x20, 0, 0x53053053) = 0
> mprotect(0x7f61cd000000, 16384, PROT_READ) = 0
> mprotect(0x7f61cd0f1000, 4096, PROT_READ) = 0
> mprotect(0x4ac000, 12288, PROT_READ)    = 0
> mprotect(0x7f61cd126000, 8192, PROT_READ) = 0
> prlimit64(0, RLIMIT_STACK, NULL, {rlim_cur=8192*1024, rlim_max=RLIM64_INFINITY}) = 0
> getrandom("\xdf\xb2\xfa\x97\x00\x3a\x09\x73", 8, GRND_NONBLOCK) = 8
> brk(NULL)                               = 0x1afc000
> brk(0x1b1d000)                          = 0x1b1d000
> pipe2([3, 4], 0)                        = 0
> fcntl(3, F_SETFD, FD_CLOEXEC)           = 0
> fcntl(4, F_SETFD, FD_CLOEXEC)           = 0
> fcntl(3, F_SETFL, O_RDONLY|O_NONBLOCK)  = 0
> fcntl(4, F_SETFL, O_RDONLY|O_NONBLOCK)  = 0
> brk(0x1b3e000)                          = 0x1b3e000
> brk(0x1b62000)                          = 0x1b62000
> brk(0x1b85000)                          = 0x1b85000
> brk(0x1ba6000)                          = 0x1ba6000
> brk(0x1bc7000)                          = 0x1bc7000
> brk(0x1bf5000)                          = 0x1bf5000
> brk(0x1c16000)                          = 0x1c16000
> ioctl(1, TCGETS, {c_iflag=ICRNL|IXON|IUTF8, c_oflag=NL0|CR0|TAB0|BS0|VT0|FF0|OPOST|ONLCR, c_cflag=B38400|CS8|CREAD, c_lflag=ISIG|ICANON|ECHO|ECHOE|ECHOK|IEXTEN|ECHOCTL|ECHOKE, ...}) = 0
> newfstatat(1, "", {st_mode=S_IFCHR|0620, st_rdev=makedev(0x88, 0), ...}, AT_EMPTY_PATH) = 0
> write(1, "Janet 1.29.1-release linux/x64/g"..., 54) = 54
> ioctl(0, TCGETS, {c_iflag=ICRNL|IXON|IUTF8, c_oflag=NL0|CR0|TAB0|BS0|VT0|FF0|OPOST|ONLCR, c_cflag=B38400|CS8|CREAD, c_lflag=ISIG|ICANON|ECHO|ECHOE|ECHOK|IEXTEN|ECHOCTL|ECHOKE, ...}) = 0
> ioctl(0, TCGETS, {c_iflag=ICRNL|IXON|IUTF8, c_oflag=NL0|CR0|TAB0|BS0|VT0|FF0|OPOST|ONLCR, c_cflag=B38400|CS8|CREAD, c_lflag=ISIG|ICANON|ECHO|ECHOE|ECHOK|IEXTEN|ECHOCTL|ECHOKE, ...}) = 0
> ioctl(0, TCGETS, {c_iflag=ICRNL|IXON|IUTF8, c_oflag=NL0|CR0|TAB0|BS0|VT0|FF0|OPOST|ONLCR, c_cflag=B38400|CS8|CREAD, c_lflag=ISIG|ICANON|ECHO|ECHOE|ECHOK|IEXTEN|ECHOCTL|ECHOKE, ...}) = 0
> ioctl(0, TCSETSW, {c_iflag=IUTF8, c_oflag=NL0|CR0|TAB0|BS0|VT0|FF0|OPOST|ONLCR, c_cflag=B38400|CS8|CREAD, c_lflag=ECHOE|ECHOK|ECHOCTL|ECHOKE, ...}) = 0
> ioctl(1, TIOCGWINSZ, {ws_row=63, ws_col=205, ws_xpixel=2255, ws_ypixel=1449}) = 0
> write(1, "repl:1:> ", 9)                = 9
> read(0, "\20", 1)                       = 1
> read(0, "\177", 1)                      = 1
> read(0, "\177", 1)                      = 1
> read(0, "p", 1)                         = 1
> write(1, "p", 1)                        = 1
> read(0, "r", 1)                         = 1
> write(1, "r", 1)                        = 1
> read(0, "i", 1)                         = 1
> write(1, "i", 1)                        = 1
> read(0, "n", 1)                         = 1
> write(1, "n", 1)                        = 1
> read(0, "t", 1)                         = 1
> write(1, "t", 1)                        = 1
> read(0, "\177", 1)                      = 1
> write(1, "\rrepl:1:> prin\33[0K\r\33[13C", 24) = 24
> read(0, "\177", 1)                      = 1
> write(1, "\rrepl:1:> pri\33[0K\r\33[12C", 23) = 23
> read(0, "\177", 1)                      = 1
> write(1, "\rrepl:1:> pr\33[0K\r\33[11C", 22) = 22
> read(0, "\177", 1)                      = 1
> write(1, "\rrepl:1:> p\33[0K\r\33[10C", 21) = 21
> read(0, "\177", 1)                      = 1
> write(1, "\rrepl:1:> \33[0K\r\33[9C", 19) = 19
> read(0, "(", 1)                         = 1
> write(1, "(", 1)                        = 1
> read(0, "p", 1)                         = 1
> write(1, "p", 1)                        = 1
> read(0, "r", 1)                         = 1
> write(1, "r", 1)                        = 1
> read(0, "i", 1)                         = 1
> write(1, "i", 1)                        = 1
> read(0, "n", 1)                         = 1
> write(1, "n", 1)                        = 1
> read(0, "t", 1)                         = 1
> write(1, "t", 1)                        = 1
> read(0, " ", 1)                         = 1
> write(1, " ", 1)                        = 1
> read(0, "\"", 1)                        = 1
> write(1, "\"", 1)                       = 1
> read(0, "h", 1)                         = 1
> write(1, "h", 1)                        = 1
> read(0, "i", 1)                         = 1
> write(1, "i", 1)                        = 1
> read(0, "\"", 1)                        = 1
> write(1, "\"", 1)                       = 1
> read(0, ")", 1)                         = 1
> write(1, ")", 1)                        = 1
> read(0, "\r", 1)                        = 1
> ioctl(0, TCSETSW, {c_iflag=ICRNL|IXON|IUTF8, c_oflag=NL0|CR0|TAB0|BS0|VT0|FF0|OPOST|ONLCR, c_cflag=B38400|CS8|CREAD, c_lflag=ISIG|ICANON|ECHO|ECHOE|ECHOK|IEXTEN|ECHOCTL|ECHOKE, ...}) = 0
> write(2, "\n", 1)                       = 1
> write(1, "hi\n", 3)                     = 3
> write(1, "\33[36mnil\33[0m\n", 13)      = 13
> ioctl(0, TCGETS, {c_iflag=ICRNL|IXON|IUTF8, c_oflag=NL0|CR0|TAB0|BS0|VT0|FF0|OPOST|ONLCR, c_cflag=B38400|CS8|CREAD, c_lflag=ISIG|ICANON|ECHO|ECHOE|ECHOK|IEXTEN|ECHOCTL|ECHOKE, ...}) = 0
> ioctl(0, TCGETS, {c_iflag=ICRNL|IXON|IUTF8, c_oflag=NL0|CR0|TAB0|BS0|VT0|FF0|OPOST|ONLCR, c_cflag=B38400|CS8|CREAD, c_lflag=ISIG|ICANON|ECHO|ECHOE|ECHOK|IEXTEN|ECHOCTL|ECHOKE, ...}) = 0
> ioctl(0, TCGETS, {c_iflag=ICRNL|IXON|IUTF8, c_oflag=NL0|CR0|TAB0|BS0|VT0|FF0|OPOST|ONLCR, c_cflag=B38400|CS8|CREAD, c_lflag=ISIG|ICANON|ECHO|ECHOE|ECHOK|IEXTEN|ECHOCTL|ECHOKE, ...}) = 0
> ioctl(0, TCSETSW, {c_iflag=IUTF8, c_oflag=NL0|CR0|TAB0|BS0|VT0|FF0|OPOST|ONLCR, c_cflag=B38400|CS8|CREAD, c_lflag=ECHOE|ECHOK|ECHOCTL|ECHOKE, ...}) = 0
> ioctl(1, TIOCGWINSZ, {ws_row=63, ws_col=205, ws_xpixel=2255, ws_ypixel=1449}) = 0
> write(1, "repl:2:> ", 9)                = 9
> read(0, "\4", 1)                        = 1
> ioctl(0, TCSETSW, {c_iflag=ICRNL|IXON|IUTF8, c_oflag=NL0|CR0|TAB0|BS0|VT0|FF0|OPOST|ONLCR, c_cflag=B38400|CS8|CREAD, c_lflag=ISIG|ICANON|ECHO|ECHOE|ECHOK|IEXTEN|ECHOCTL|ECHOKE, ...}) = 0
> write(2, "\n", 1)                       = 1
> close(3)                                = 0
> close(4)                                = 0
> exit_group(0)                           = ?
> +++ exited with 0 +++

Answer:

> Certainly! The strace output you posted shows a system call trace for a Janet language REPL (Read-Eval-Print Loop) session. Let's break down some of the key parts.
> Initialization:
>
>     execve(...) = 0: Executes the Janet program.
>     brk(NULL) = 0x1afc000: Memory allocation related to the heap.
>     arch_prctl(...) = -1 EINVAL: Tries to set architecture-specific thread state, but fails.
>     mmap(...) = 0x7f61cd0f3000: Memory mapping, often used for shared memory, dynamic loading, etc.
>
> Libraries and Dependencies:
>
>     access("/etc/ld-nix.so.preload", R_OK) = -1 ENOENT: Checks if a specific preload file exists.
>     openat(...) = -1 ENOENT: Attempts to open multiple versions of libm.so.6 and libc.so.6 which are fundamental libraries in Linux. Finds the appropriate versions and maps them into memory.
>
> Memory and Environment Setup:
>
>     set_tid_address(...): Sets the address of the thread ID.
>     set_robust_list(...): Sets up a robust futex list, used for inter-process communication.
>     mprotect(...): Changes protection of memory areas.
>     getrandom(...): Gets random bytes for cryptography or other uses.
>
> Terminal and IO:
>
>     ioctl(...): Checks and sets terminal settings.
>     write(1, "Janet 1.29.1-release linux/x64/g"..., 54) = 54: Writes the Janet version info to the terminal.
>     write(1, "repl:1:> ", 9) = 9: Writes the REPL prompt.
>
> User Input:
>
>     read(0, ...) and write(1, ...): Interacts with the user. Reads one character at a time from the keyboard and writes it to the terminal.
>
> The program starts up, loads required libraries, initializes itself, and goes into a REPL mode where it waits for and reads user input one character at a time, echoing it back to the terminal.
>
> For understanding strace and the system calls, you can refer to "The Linux Programming Interface" by Michael Kerrisk (No Starch Press, 2010). For the more nuanced aspects like arch_prctl, additional Linux Kernel and GLIBC documentation would be relevant.

Not bad at all. Let's drill a little bit deeper.

Prompt:

> What did the user write to the prompt?

Answer:

> The user wrote "print" to the prompt and then deleted the "t" character at the end, resulting in "prin".
>
> Here's the relevant part of the `strace` output for this:
>
> ```
> read(0, "p", 1)                         = 1
> write(1, "p", 1)                        = 1
> read(0, "r", 1)                         = 1
> write(1, "r", 1)                        = 1
> read(0, "i", 1)                         = 1
> write(1, "i", 1)                        = 1
> read(0, "n", 1)                         = 1
> write(1, "n", 1)                        = 1
> read(0, "t", 1)                         = 1
> write(1, "t", 1)                        = 1
> read(0, "\177", 1)                      = 1
> write(1, "\rrepl:1:> prin\33[0K\r\33[13C", 24) = 24
> ```
>
> Here, the `read(0, "p", 1)` and `write(1, "p", 1)` sequences (and similar) show the program reading one character at a time from standard input (file descriptor `0`) and then writing it to standard output (file descriptor `1`).
>
> The ASCII value `\177` represents the delete character (DEL). After the user inputs each character, it's displayed back to them, and when they press the delete key, a series of control characters is issued to erase the last character from the display ("\rrepl:1:> prin\33[0K\r\33[13C").
>
> So, based on this, we can determine that the user was typing "print" but then deleted the last character "t", leaving "prin".

The good: it caught that I edited `print`. The bad: I wrote `(print "hi")` and it couldn't reconstruct that at first. But still, not bad.

# Takeaways

`strace` & co. are great tools. You don't need LLMs to use them and figure out
what a program is doing at runtime. Over the years since I've started using
them, they've been more useful than I can say.

Their output tends to be very large. There are tools to dig into it, and LLMs
can be one of them. You can ask questions in natural language about what the
program was doing, and the answers tend to be pretty good, at least with GPT-4.
I haven't had one of these cases for myself yet, but I suspect this combination
can be very useful beyond explaining the output to new users.

# Further readings

Julia Evans' website has quality posts in general, and about strace in particular: https://jvns.ca/categories/strace/.
