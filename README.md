# Nginx-load-balancer
The project is a simple demonstration example how load balancing with Nginx and Node.js works.
The whole demonstraton example runs in one Docker container  to have an easy set up available. Such an approach is of course not suitable for production and will result non-accurate results in load tests.

## Project execution
- Download the project
- Docker installation is required
- Server needs to be started via terminal in project folder
    > start server: `docker-compose up --build`

    > stop server: `docker-compose down`

## Load testing example
- A library for load testing needs to be installed -> e.g.: loadtest

    > `npm install -g loadtest`

- Execution of load test via terminal

    > `loadtest -t 5 -c 100 --rps 100 http://localhost:80`

    options: -t (timelimit) -c (concurrency) --rps (requestsPerSecond)

- Verification of results via terminal 

    *E.g.: consider "mean latency" or "completed requests"*

- Addional: 
In order to compare the Node.js server with and without load balancing results from TC1 and TC2 can be considered:

    > TC1: `loadtest -t 5 -c 100 --rps 100 http://localhost:3000`

    > TC2: `loadtest -t 5 -c 100 --rps 100 http://localhost:80`

    *Sidenote: with the default set up the "mean latency" without load balancing should be faster.


