package io.fischermatte.geolud.server.rest.api.v1.project;

import org.springframework.validation.annotation.Validated;

import javax.validation.constraints.NotNull;

/**
 * ErrorResponseDto
 */
@Validated
public class ErrorResponseDto {
    private Integer code = null;

    private String message = null;

    public ErrorResponseDto code(Integer code) {
        this.code = code;
        return this;
    }

    /**
     * Get code
     *
     * @return code
     **/
    @NotNull
    public Integer getCode() {
        return code;
    }

    public void setCode(Integer code) {
        this.code = code;
    }

    public ErrorResponseDto message(String message) {
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

