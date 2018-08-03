package io.fischermatte.geolud.server.contact;

import org.springframework.validation.annotation.Validated;

import javax.validation.constraints.NotNull;

/**
 * ContactRequestDto
 */
@Validated
public class ContactRequestDto {
    private String name = null;

    private String email = null;

    private String message = null;

    public ContactRequestDto name(String name) {
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

    public ContactRequestDto email(String email) {
        this.email = email;
        return this;
    }

    /**
     * Get email
     *
     * @return email
     **/
    @NotNull
    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public ContactRequestDto message(String message) {
        this.message = message;
        return this;
    }

    /**
     * Get message
     *
     * @return message
     **/
    @NotNull
    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }


}

