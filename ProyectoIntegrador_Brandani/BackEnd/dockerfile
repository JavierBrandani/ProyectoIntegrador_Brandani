FROM amazoncorretto:8-alpine-jdk
MAINTAINER JNB
COPY  target/Brandani-0.0.1-SNAPSHOT  jnb-app.jar
COPY target/mgb-0.0.1-SNAPSHOT.jar  jnb-app.jar
ENTRYPOINT ["java","-jar","/mgb-app.jar"]
COPY target/Brandani-0.0.1-SNAPSHOT.jar Brandani-app.jar
ENTRYPOINT ["java","-jar","/Brandani-app.jar"]
