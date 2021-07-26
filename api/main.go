package main

import (
	"fmt"
	"github.com/kerberos-io/glass/api/src/routers"
	"log"
	"os"
)

func main() {

	const VERSION = 1.0
	action := os.Args[1]

	switch action {
	case "version":
		log.Printf("%s: %0.1f\n", "You are currrently running Kerberos Glass", VERSION)
	case "run":
		{
			name := "glass" // os.Args[2]
			port := "8082" //os.Args[3]
			routers.StartMqttListener(name)
			routers.StartWebserver(name, port)
		}
	default:
		fmt.Println("Sorry I don't understand :(")
	}
}
