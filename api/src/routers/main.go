package routers

import (
	"github.com/kerberos-io/glass/api/src/routers/http"
	"github.com/kerberos-io/glass/api/src/routers/mqtt"
)

func StartWebserver(name string, port string) {
	http.StartServer(name, port)
}

func StartMqttListener(name string) {
	mqtt.StartListener(name)
}
