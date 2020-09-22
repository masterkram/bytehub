# Computer Networks

## What is the internet?
The internet is a collection of networks with billions of connected computing devices.

+ Devices
    + Hosts run network apps.
+ Packet switches
    + Forward packets (chunks of data) to their destination.
    + Done by routers and link-layer switches.
+ Communication links
    + Fiber, copper, radio spectrum (WiFi, 4G, satelite)
    + Transmission rate: *bits per second* (bandwith)

### Network of networks
+ Home networks, enterprise networks, mobile networks
+ Internet Service Provider (ISP)
    + hosts connect to the internet via access ISPs
    + most ISPs own part of the physical network (fiber, cables, etc)
+ Interconnected ISPs
    + Regional, National, Global ISPs
    + resulting network is very complex
    + evolution driven by economics, national policies
    

### Protocols and standards
*A protocol defines the format and the order of messages exchanged between two or more communicating entities, as well as the actions taken on the transmission and/or receipt of a message or other event*

+ TCP, IP, HTTP etc.
+ Internet Standards
    + Request for comments (RFC)
    + IETF: Internet Engineering Task Force

### How ISPs are connected
Access networks connect to global ISPs.
Global ISPs are connected either by `Interent exchange points` or by `peering`.

#### Peering:
+ two or more ISPs interconnect with each other to exchange internet tracfic for mutual benefit.
+ public peering (at IXP) or private peering (direct interconnects)

### Content providers networks
Big content delivery networks CDNs may run their own networks for better control and service.

## Operation principles:

### Packet Switching:
Network forwards `packets` from one router to the next across links on path from source to destination.

`Packets`:
+ data from application is broken into smaller chunks, `packets`, of length L bits.
+ Length is typically is variable but upper bounded.
+ A packet contains data and a header.
+ The header contains control information e.g. the destination of the packet.


#### store and forward:
Entire packet must arrive at router before it can be transmitted to the next link.

```mermaid
graph LR;
source([Source L bits per packet])-- R bps -->router[(Router)]-- R bps -->destination([Destination]);
```

+ `packet transmission delay`: takes `L/R` seconds to transmit (push out) L-bit
packet into link at R bps

packet transmission delay = time needed to transmit L-bit packet into link = L (bits) / R (bits/sec)

#### Queueing

```mermaid
graph LR;
A-- R=100 Mb/s -->router1[(Router 1)]-- R=1.5 Mb/s -->router2[(Router 2)]-->C;subgraph Router1
router1---queue[[queue of packets]]
end
B-->router1;
```

Packet queuing and loss: if arrival rate (in bps) to link exceeds
transmission rate (bps) of link for some period of time:
• packets will queue, waiting to be transmitted on output link
• packets can be dropped (lost) if memory (buffer) in router fills up

#### Circuit switching - Alternatice to packet switching
*end-end resources allocated to, reserved for “call” between source and destination*

dedicated resources: no sharing
+ circuit-like (guaranteed) performance
+ circuit segment idle if not used by call (no
sharing)

##### FDM
*Frequency Division Multiplexing*
+ optical, electromagnetic frequencies divided
into (narrow) frequency bands
+ each call allocated its own band, can
transmit at max rate of that narrow band 

##### TDM
*Time Division Multiplexing*
+ time divided into slots
+ each call allocated periodic slot(s),
can transmit at maximum rate of
(wider) frequency band (only) during
its time slot(s)

![Circuit switching TDM vs FDM](./circuitswitching.jpg)

### Packets vs. Circuits
Two methods for organizing communication in a network:
1. **circuit-switching**:
    + for each connection between two endpoints a part of the link speed is reserved
    + very suitable if the users need a constant number of bits per second; e.g telephony
    + circuit establishment overhead
2. **packet-switching**:
    + information flows through the network as packets, which one after the other are sent at the full link speed
    + very suitable if the users’ needs are very variable; e.g., Internet traffic 

### Layering

Networked systems often use a layered design
Because, layering provides conceptual and
structural advantages
+ a structured way to discuss system components
+ modularity makes it easier to update system
components
Each layer uses the service from the layer below it, to
provide a better, more useful, more complete service
to the layer above it
+ Each layer may introduce its own header
“One layer’s header is (part of) another layer’s data.” 

| Layer        | Resposability | Example | Message Name | Addressing |
| ------------- | ------------ | ------- | ------------ | ---------- |
| Application Layer | User applications such as web browsing, email | HTTP, SMTP, etc| Message | |
| Transport Layer |  End to end delivery of segments |  TCP (reliable, connection-oriented, flow control), UDP (unreliable, connectionless, no flow control) | Segment | Port # |
| Network Layer | Routing of packets from a source to destination | IP | Datagram | IP address |
| Link Layer | Unreliable delivery of frames to a neighbour node | WiFi, Ethernet | Frame | MAC address |
| Physical Layer | Unreliable delivery of bits | wireless, wired (optical links, coaxial cable, copper) | | |

### Hourglass Model
![Circuit switching TDM vs FDM](./hourglass.png)

Thin waist of the Internet is IP:
+ Multiple application, transport
protocols above IP
+ Multiple link layer and physical layer
below IP
+ “IP is the glue that binds the Internet
together”

### Addressing in the Internet
IP address: Unique address showing the recipient

+ Computers on the Internet
(“hosts'') are identified by an
address:
+ a 32-bit number, for example:
10000010 01011001 00000011
11111001
+ For convenience, octets are
usually written down in decimal,
for example 130.89.3.249.

IP addresses are assigned systematically;
+ For example, all addresses starting with 130.89 are on the University of
Twente (IP = Network ID + Host ID). 

For human convenience, many hosts also have a name, for example
+ www.utwente.nl.
+ Converting names to IP addresses and vice versa is done by the Domain
Name System (DNS)
47

+ Each sub-network has a subset
of the UT's full address range.
+ Routers outside the UT only
need 1 entry in their
forwarding tables for the
entire UT; subnetworks are
handled within the UT.

#### IPv4
32-bit addresses
2^32 ~ 4 Billion

But, still shortage of IP addresses due to 
address allocation as
entire blocks, e.g.,
130.89 for UT

Human readable names
+ For human convenience, many hosts also have a name, for
example www.utwente.nl.
+ Converting names to IP addresses and vice versa is done by the
Domain Name System (DNS)

### Routing and Forwarding
Routing: Finding a path between a source and a
destination over the most appropriate routers
Forwarding: local action, moving incoming
packet to appropriate outgoing link of the router