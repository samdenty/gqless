#!/bin/bash

yarn build --dev --target web

echo $(gzip -c pkg/builder_bg.wasm | wc -c)
