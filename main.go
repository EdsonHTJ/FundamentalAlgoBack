package main

import (
	"crypto/sha256"
	"encoding/hex"
	"encoding/json"
	"fmt"
	"net/http"
	"os/exec"
	"time"

	"github.com/gorilla/mux"
)

const (
	FIB   = iota
	QUICK = iota
	PRIME = iota
	MDC   = iota
	SUM   = iota
	CONT  = iota
)

type request struct {
	Language int    `json:"lang"`
	PreProg  int    `json:"pre"`
	Program  string `json:"program"`
}

func programHandler(w http.ResponseWriter, rq *http.Request) {
	var r request
	err := json.NewDecoder(rq.Body).Decode(&r)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	hash := sha256.Sum256(append([]byte(r.Program), byte(time.Now().Nanosecond())))
	cmd := exec.Command("mkdir", "./programs/"+hex.EncodeToString(hash[:]))
	err = cmd.Run()
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}
}

func getAlgoHandler(w http.ResponseWriter, rq *http.Request) {
	var r request
	err := json.NewDecoder(rq.Body).Decode(&r)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}
}

func main() {
	r := mux.NewRouter()
	r.HandleFunc("/run", programHandler).Methods("POST")
	r.HandleFunc("/algo", getAlgoHandler).Methods("POST")

	err := http.ListenAndServe(":3000", r)
	if err != nil {
		fmt.Println(err)
	}
}
