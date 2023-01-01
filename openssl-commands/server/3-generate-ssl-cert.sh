openssl x509 \
-req \
-days 365 \
-sha256 \
-in ../../cert/server.csr \
-signkey ../../cert/server.key \
-out ../../cert/server.crt \