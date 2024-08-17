#!/usr/bin/env bash
set -ex
nginx
pytest -s --url http://localhost