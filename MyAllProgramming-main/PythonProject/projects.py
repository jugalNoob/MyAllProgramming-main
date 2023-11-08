import random

# Generate a random integer between 1 and 100
random_integer = random.randint(1, 100)
print(random_integer)


import random
my_list = [1, 2, 3, 4, 5]
random.shuffle(my_list)
print(my_list)


pip install psutil



import psutil

# Get CPU information
cpu_info = psutil.cpu_info()
print("CPU Info:")
print(cpu_info)

# Get CPU usage
cpu_usage = psutil.cpu_percent(interval=1, percpu=True)
print("\nCPU Usage:")
for i, core in enumerate(cpu_usage):
    print(f"Core {i + 1}: {core}%")

# Get memory information
memory_info = psutil.virtual_memory()
print("\nMemory Info:")
print(f"Total Memory: {memory_info.total} bytes")
print(f"Available Memory: {memory_info.available} bytes")
print(f"Used Memory: {memory_info.used} bytes")

# Get disk information
disk_partitions = psutil.disk_partitions()
print("\nDisk Partitions:")
for partition in disk_partitions:
    print(f"Device: {partition.device}")
    print(f"Mountpoint: {partition.mountpoint}")
    print(f"Filesystem type: {partition.fstype}")

# Get disk usage
for partition in disk_partitions:
    usage = psutil.disk_usage(partition.mountpoint)
    print(f"\nDisk Usage for {partition.mountpoint}:")
    print(f"Total: {usage.total} bytes")
    print(f"Used: {usage.used} bytes")
    print(f"Free: {usage.free} bytes")
    print(f"Usage Percentage: {usage.percent}%")


11::Concurrency and Multithreading

2::Asynchronous Programming:
3::Functional Programming 
4::Generators and Iterators: 
    
Distributed Systems: Understand concepts related to distributed computing, message queues (e.g., RabbitMQ, Apache Kafka),
and building distributed systems using Python.