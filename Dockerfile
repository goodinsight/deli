FROM gradle:8.2.1-jdk11 AS builder

WORKDIR /workspace

COPY build.gradle settings.gradle gradlew gradlew.bat ./
COPY gradle ./gradle
RUN gradle --no-daemon dependencies >/dev/null

COPY src ./src
RUN gradle --no-daemon clean bootJar -x test

FROM eclipse-temurin:11-jre-jammy

WORKDIR /app

COPY --from=builder /workspace/build/libs/deli-*.jar /app/deli.jar

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "/app/deli.jar"]
