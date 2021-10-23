package main

import (
	"bufio"
	"bytes"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
	"os"
)

func main() {
	reader := bufio.NewReader(os.Stdin)
	text, _ := reader.ReadString('\n')

	values := map[string]string{"text": "\"" + text + "\""}
    json_data, err := json.Marshal(values)


	resp, err := http.Post("https://sentim-api.herokuapp.com/api/v1/", "application/json",bytes.NewBuffer(json_data))
	
	if err != nil { 
		fmt.Println(err)
	}

	body, err := ioutil.ReadAll(resp.Body)

	resp.Body.Close()

	if err != nil {
		fmt.Println(err)
	}

	fmt.Println(string(body))

}