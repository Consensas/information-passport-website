<img src="https://consensas-aws.s3.amazonaws.com/icons/passports-github.png" align="right" />

# information-passport-website
Demo Website for Information Passport (Apache / NGINX)

## About
An **[Information Passport](https://github.com/Consensas/information-passport/tree/main/docs#information-passport)**
is a _signed digital document_ that makes some claim,
for example "So and so was Vaccinated against COVID-19 on a certain date".
If the _signature_ matches the _public key_ of the digital document, the
document is **Verified**.
If the **Claim** made in the document checks against a set of (use-defined) rules
_and_ the "fingerprint" of the public key is known, we say the document is
**Validated**.

A **Vaccination Passport** is an Information Passport that
provides digital proof of a Vaccination.
A **Test Record Passport** is an Information Passport that provides
digital proof a some test having been performed.

## Installation

* clone / download this project
* use the files in `cfg` to set up your webserver
* edit `validate/main.js` and change the URL `DID_EXAMPLE` points to 
  to the domain / url you are using. Sorry, this is horrible.

## Building

    npm run build

The output code is in `dist`
~
