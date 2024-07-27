---
Title: Redis cleanup job settings object
alwaysopen: false
categories:
- docs
- operate
- rs
description: Documents the redis_cleanup_job_settings object used with Redis Enterprise
  Software REST API calls.
linkTitle: redis_cleanup_job_settings
weight: $weight
---

Deprecated and replaced with `persistence_cleanup_scan_interval`.

| Name | Type/Value | Description |
|------|------------|-------------|
| cron_expression | string | [CRON expression](https://en.wikipedia.org/wiki/Cron#CRON_expression) that defines the Redis cleanup schedule |
