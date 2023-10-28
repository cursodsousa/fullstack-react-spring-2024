package io.github.dougllasfps.imageliteapi.domain.enums;

import lombok.Getter;
import org.springframework.http.MediaType;

import java.util.Arrays;

public enum ImageExtension {

    PNG(MediaType.IMAGE_PNG),
    GIF(MediaType.IMAGE_GIF),
    JPEG(MediaType.IMAGE_JPEG);

    @Getter
    private MediaType mediaType;

    ImageExtension(MediaType mediaType) {
        this.mediaType = mediaType;
    }

    public static ImageExtension valueOf(MediaType mediaType){
        return Arrays.stream(values())
                .filter(ie -> ie.mediaType.equals(mediaType))
                .findFirst()
                .orElse(null);
    }

    public static ImageExtension ofName(String name){
        return Arrays.stream(values())
                .filter(ie -> ie.name().equalsIgnoreCase(name))
                .findFirst()
                .orElse(null);
    }
}
