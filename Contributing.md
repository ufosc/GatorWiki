
# Contributing

Thanks for contributing to GatorWiki!

This is a little sparse now, but more info will be coming soon!

+ Bugs: https://github.com/ufosc/GatorWiki/issues
+ Communicatons: https://discord.gg/z53pYjjNhH

## Table of Contents

+ Style Guide
+ Testing
+ How to Submit Changes
+ How to Report Bugs
+ How to Request an Enhancement
+ Where can I get help?

## Style Guide

TODO

## Testing

This project utilizes unit testing and integration testing to
maintain reliability and quality standards. The testing
stacks for the front and back end are described below.

### Backend Testing

The Django backend utilizes [pytest](https://docs.pytest.org) for unit testing of Python code.

#### Writing Tests

Test functions, classes, and files are written to comply with
[pytest's test discovery standards](https://docs.pytest.org/en/6.2.x/goodpractices.html#test-discovery).

Unit tests for components in a file `foo.py` will be stored in a `test_foo.py`
in the same directory as the foo.py file.

Likewise, functions will be named as `test_<function_name>` and 
test classes will be named as `Test<ClassName>`.

#### Running Tests

To run the backend tests, run the following command after building
the backend and db containers:

```bash
docker compose run backend pytest
```

### Frontend Testing

TODO

## How to Submit Changes

TODO

## How to Report Bugs

TODO

## How to Request an Enhancement

TODO

## Where can I get help?

TODO


## Resources

+ [Getting Started with Django](https://www.djangoproject.com/start/)
+ [Getting Started with React](https://reactjs.org/docs/getting-started.html)
+ [Install Docker](https://docs.docker.com/get-docker/)
