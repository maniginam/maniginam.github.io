echo "serving blog on port 8080"
pushd docs
python -m http.server 8080
popd
