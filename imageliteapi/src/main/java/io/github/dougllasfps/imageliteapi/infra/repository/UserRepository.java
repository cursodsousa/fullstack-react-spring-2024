package io.github.dougllasfps.imageliteapi.infra.repository;

import io.github.dougllasfps.imageliteapi.domain.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, String> {

    User findByEmail(String email);
}
