# become a local CA
openssl req -x509 -sha256 -nodes -days 1825 -newkey rsa:2048 -keyout ../../cert/rootCA.key -out ../../cert/rootCA.crt