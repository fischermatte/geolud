package io.fischermatte.geolud.server.project;

import org.springframework.validation.annotation.Validated;

/**
 * CustomerDto
 */
@Validated
public class CustomerDto {
    private String name = null;

    private String url = null;

    public CustomerDto name(String name) {
        this.name = name;
        return this;
    }

    /**
     * Get name
     *
     * @return name
     **/
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public CustomerDto url(String url) {
        this.url = url;
        return this;
    }

    /**
     * Get url
     *
     * @return url
     **/
    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

}

