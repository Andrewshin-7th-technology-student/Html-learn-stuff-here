# Build the manager binary
ARG BUILD_IMG
ARG TARGETOS
ARG TARGETARCH

FROM ${BUILD_IMG} as builder

WORKDIR /workspace
RUN go mod download

COPY .github/dependabot.yml .github/dependabot.yml
COPY html/ html/
COPY javascript/ javascript/
RUN CGO_ENABLED=0 GOOS=${TARGETOS:-linux} GOARCH=${TARGETARCH} go build -a -o manager cmd/main.go
