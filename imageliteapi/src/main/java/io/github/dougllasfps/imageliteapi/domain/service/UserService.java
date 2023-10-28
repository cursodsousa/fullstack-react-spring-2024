package io.github.dougllasfps.imageliteapi.domain.service;

import io.github.dougllasfps.imageliteapi.domain.AccessToken;
import io.github.dougllasfps.imageliteapi.domain.entity.User;

public interface UserService {
    User getByEmail(String email);
    User save(User user);
    AccessToken autheticate(String email, String password);
}
