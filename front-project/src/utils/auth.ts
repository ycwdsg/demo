// 身份认证
import JSEncrypt from 'jsencrypt'

const pubKey = `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAzDpr3VwyCm+aglYMGFgn
5E4RJd0z2Fi3MYMf+iJYcMkjvaivAoG9osmZ3x0ykun2RKIiZJQlwjNGgPM5DKod
qlCVayecWAT4y7Mr7N+RU5k73G3GiF/Wk9FE4E9ubW68nd414Bg0tiwRBOin2DlQ
EUQogKgSggAxhpeL3J7+Rk0ldWLN/H9AFHXAXitfqZdErk+DEA1hxrtzlhW8n3Dx
4rUELQC5/XcooIK8S0DrsphtT+DXOG4DMsyTrbXcRfQORHmgsGjLX213F0fnBqkE
xBTzGLzBVN5R3pUDCUREyDc6nLsS2uvhTj9OY2PSU8hmuYzL4U2QASj3FayncgPd
bwIDAQAB
-----END PUBLIC KEY-----`

const prvKey = `-----BEGIN RSA PRIVATE KEY-----
MIIEowIBAAKCAQEAzDpr3VwyCm+aglYMGFgn5E4RJd0z2Fi3MYMf+iJYcMkjvaiv
AoG9osmZ3x0ykun2RKIiZJQlwjNGgPM5DKodqlCVayecWAT4y7Mr7N+RU5k73G3G
iF/Wk9FE4E9ubW68nd414Bg0tiwRBOin2DlQEUQogKgSggAxhpeL3J7+Rk0ldWLN
/H9AFHXAXitfqZdErk+DEA1hxrtzlhW8n3Dx4rUELQC5/XcooIK8S0DrsphtT+DX
OG4DMsyTrbXcRfQORHmgsGjLX213F0fnBqkExBTzGLzBVN5R3pUDCUREyDc6nLsS
2uvhTj9OY2PSU8hmuYzL4U2QASj3FayncgPdbwIDAQABAoIBAQCD+bDgwIZ55fsU
BOUWCknlKGm+bT7mrRXdQh4092Ltp52YH1zRIuRYQS1VWDnpZJXHbnsJQg9QevAx
vnt8aqZ2/FJCh7tpyfS5NhTJowP34Qsk/C+Sy1QP++klh08WGrx6zDFGmn3dx4ZM
BMkKWqcaMVB3K6WiKtvWXTJ9pKUu6d4iYZlBFoDXv13Qk6oVyYc3omkBbGfwm6yF
cXJlbR/9HmpyAjDEhiRbVtiUDPWMntrE4fAUDhHa8mae4EtPgO7Mvcy35z8Uz422
wCANmKgoyUjtXqoWSz7o1qcMeHTTLimt8WIUtZ8+txZ/MVyGDF+D2EQcRDi+ro5J
IhEtk8lRAoGBAOd7EFkAys6fxdWQlxW5UzGreEXkLce6YfuJkW8fYy16FOiH/0jE
oty/EjVz6xTRLgyV1lyD3v1Ql1yYL8RNp0M2D2mfIChgn9Q2unaORfLootUneL67
YZ0x2HJBuTigvl6FKCi0D4Yf1xhAuOlVI7KnXnNdg7gHueXp4nbgndy3AoGBAOHc
Xbblkg+sxNKO2awT8bcD96QNtTIiIxJbmyu/S+qiUFUXTSp1SgSg6r7Vgzm+luah
iAdGfUznKC3oEWlHWGc8WeXKv4MlNSSTsFSl6VrO6x2qng/IiYgLyt/D3WrHy9xT
wsO4CeQuz2AdQ7XXf5XdPiD5AXR8H/1/U2KHnL0JAoGAQnr/mPA3TtxoLwvVuHF/
STab1kbQNxp6ZYl+8VEsZLU5KAdW9Ak1VPyzOBLQoyvoc8jcxblB47KvpfI3VcOP
lCgEiSsgSzhk7sfBCaeWw0q46UrqzKx4PnNAXKAvl+nigrbvb7E2/ChM2DROZwUC
uZ6D69IhsErXwwZG+ilMbUUCgYBBQmLxjbN+Q/U6wXuzdK/KqaLMDAnmymZHz6Au
K7/Ls8pyS6FIO0t/ut8Y9KhN7vu698FOGNfreH7rhLpDKRIqAg4Xj1V2lzGbt/Cj
BK1AR7k3gSzacp8KaB3eOcGoMMJ+jtUfp/VzsPLKWqpNyE5dBugEru30skir/jYh
qf1nwQKBgAWunOF8LfcxoUV62zxvjLIIv2YGucYFzE5uNt+5LKhnuCATjMlDyb5z
Pj/HjHF0HN3CUGl68czNrEiyX1n0euqzAnV2CLP/Jm/IPylnNXbN56Kp3j4oV5Vn
5iCJWr/yqt2AOWXqMxT4H9gekEQ2Ydb1yl1xwV3puWQTppLS8oap
-----END RSA PRIVATE KEY-----`
// 公钥加密
export const encrypt=(val:string)=>{
    const encrypt = new JSEncrypt()
    encrypt.setPublicKey(pubKey)
    return encrypt.encrypt(val)
}

// 解密
export const decrypt=(val:string)=>{
    const decrypt = new JSEncrypt()
    decrypt.setPrivateKey(prvKey)
    return decrypt.decrypt(val)
}