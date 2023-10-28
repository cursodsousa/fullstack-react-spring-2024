package io.github.dougllasfps.imageliteapi.domain.service;

import io.github.dougllasfps.imageliteapi.domain.entity.Image;
import io.github.dougllasfps.imageliteapi.domain.enums.ImageExtension;

import java.util.List;
import java.util.Optional;

public interface ImageService {
    Image save(Image image);

    Optional<Image> getById(String id);

    List<Image> search(ImageExtension extension, String query);
}
