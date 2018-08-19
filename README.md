It is angular version 6 project where I am writing the service to communicate with HTTP.
Currently I have not structured the code fully but using some basic good practices like,

I am injecting the HttpClientModule in app.module so it can be accisible from anywhere in the project

now in the component constructor I can inject the HttpClient so it can use http fetching.

another important point is, it is returning observable so asynchronously we will be handling the response for each call.