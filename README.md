# Slack-lb

Slack has a requirement to send a response within 3000msec or else the command times out.          
This is a simple express app that proxies a request to the slack-command processing endpoint and returns an immediate `200` so that we can use the provided `response_url`          
