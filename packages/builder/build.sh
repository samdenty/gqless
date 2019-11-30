#!/bin/bash

yarn build --target web

wasm-snip pkg/builder_bg.wasm -o pkg/builder_bg.wasm --snip-rust-panicking-code # --snip-rust-fmt-code

for i in {1..3}; do
  wasm-opt --strip-debug --strip-producers --inlining --code-folding -aimfs 5 -Oz pkg/builder_bg.wasm -o pkg/builder_bg.wasm
done

echo $(gzip -c pkg/builder_bg.wasm | wc -c)
