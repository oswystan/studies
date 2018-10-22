// add()/get()/set()/del()
// parse()/serialize()

sdp.V
sdp.O
sdp.S
sdp.I
sdp.U
sdp.E
sdp.P
sdp.C
sdp.B
sdp.Z
sdp.K
sdp.T
sdp.R
sdp.M
sdp.A

type SdpNode struct {
    children interface{}
}

type M struct {
    type string
    port uint16
    protocol string
    payloadtypes []int
}

sdp.Parse(str) {
    ret := new(SdpNode);
    ret.parse(str);
    return ret;
}

sdp.Serialize(node) {
    return node.serialize();
}

sdp.New() {
    return new(SdpNode);
}

node := sdp.New();

node.Add("m").(sdp.M).Type("audio").Port(111).Protocol("UDP/DTLS").PayloadTypes([111, 98, 100])
node.M("audio").Add("a").(sdp.A).Key("rtpmap").Value("100 PCMU/8000");
node.M("vidio").Add("c").(sdp.C).Net("IN").AddressType("IP4").Address("10.1.1.1")

node.M("audio").(sdp.M).A("ftpmap").Del();

