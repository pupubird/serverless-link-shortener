<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="https://github.com/pupubird/serverless-link-shortener/blob/master/icon.png" alt="Project logo"></a>
</p>

<div align="center">
<h5>*Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>*</h5>
</div>

<h3 align="center">Serverless Link Shortener</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/pupubird/serverless-link-shortener.svg)](https://github.com/pupubird/serverless-link-shortener/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/pupubird/serverless-link-shortener.svg)](https://github.com/pupubird/serverless-link-shortener/pulls)

</div>

---

<p align="center"> A serverless link shortener hosted on AWS.
    <br> 
</p>

## 📝 Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Deployment](#deployment)
- [Usage](#usage)
- [Built Using](#built_using)

## 🧐 About <a name = "about"></a>

This serverless application is a typical link shortener, but hosted serverlessly.

## 🏁 Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See [deployment](#deployment) for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install this serverless application.

1. An AWS account.
2. AWS user account with programmatic access.

### Installing

Install serverless cli globally by

```
npm install -g serverless
```

Don't forget to configure your aws as well! You may need to download aws cli [here](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html)

For more information, please go to the official [https://www.serverless.com/framework/docs/getting-started/](https://www.serverless.com/framework/docs/getting-started/)

## 🧰 Usage <a name="usage"></a>

There are only 2 endpoints:

GET - `https://<your_url>/{name}`:

- A get request with name as the path parameters, example be like: `https://8onb6olqak.execute-api.us-east-1.amazonaws.com/prod/amazon`. It will redirect you to the actual url behind this shorterned link.

POST - `https://<your_url>/`:

- A post request with the following field:
  - `name`: The name of the shorterned url
  - `url`: The actual url that will be redirected to

Example:

```
$> curl -d '{"name":"<your preferred short name>", "url": "<the actual url>"}' -X POST -H "Content-Type: application/json" <the api gateway url >
```

It should return your short name in response:

```
<your preferred short name>
```

## 🚀 Deployment <a name = "deployment"></a>

This project had been setup completely with `serverless`, to deploy, simply run:

```
serverless deploy
```

You should be seeing an API gateway spun up with similar url like `https://8onb6olqak.execute-api.us-east-1.amazonaws.com/prod/`

## ⛏️ Built Using <a name = "built_using"></a>

- [Serverless](https://www.mongodb.com/) - Server framework
- [AWS DynamoDB](https://expressjs.com/) - Database
- [AWS API Gateway](https://vuejs.org/) - API gateway for caching etc
- [NodeJs](https://nodejs.org/en/) - Server Environment

If you have any cool feature in mind, do not hesitate to open up a GitHub issue! I will be very happy to continue with this project.
