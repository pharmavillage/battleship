---
Title: Manage passwords
alwaysopen: false
categories:
- docs
- operate
- rs
description: Manage user passwords.
hideListLinks: true
linkTitle: Manage passwords
toc: 'true'
weight: 30
---

Redis Enterprise Software provides several ways to manage the passwords of local accounts, including:

- [Password complexity rules]({{< relref "/operate/rs/security/access-control/manage-passwords/password-complexity-rules" >}})

- [Password expiration]({{< relref "/operate/rs/security/access-control/manage-passwords/password-expiration" >}})

- [Password rotation policies]({{< relref "/operate/rs/security/access-control/manage-passwords/rotate-passwords" >}})

You can also manage a user's ability to [sign in]({{< relref "/operate/rs/security/access-control/manage-users/login-lockout#user-login-lockout" >}}) and control [session timeout]({{< relref "/operate/rs/security/access-control/manage-users/login-lockout#session-timeout" >}}).

To enforce more advanced password policies, we recommend using [LDAP integration]({{< relref "/operate/rs/security/access-control/ldap" >}}) with an external identity provider, such as Active Directory.
