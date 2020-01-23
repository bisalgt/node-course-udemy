# to install and use npm package to a directory


1) initialize npm so that packages.json is created by ####   npm init
2) install that package #### npm install packageName@packageVersion -- to install locally
3) To install a npm package globally we need to use -g at last which stands for global

#### node install nodemon@1.18.5 -g

### nodemon is a good tool to use while development as it automatically updates the terminal output after change in code

# In synchronous programming one line runs after another.
# NONE of our asynchronous programme is going to run until the main programme is completed.
# JS is single threaded// only call stack
# In node is multi threaded using c++ implementation.
### node uses call stack-- Node api -- callback queue. there are three threads. and event loop checks the callback queue and call stack and if call back is empty it pushes the callback queues functions to execute which were pushed after they were ready in NODE API and sent to the callback queue.
#### event loop cannot run any of our asynchronous call back until the call stack is empty.


# To use npm module use npm init to initialize packages.json in that dir so that npm install will install required packages and save the discription in package.json. TO install using packages.json use npm install.