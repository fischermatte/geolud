package io.fischermatte.geolud.server.rest.api.v1.project;

import org.springframework.validation.annotation.Validated;

/**
 * LinkDto
 */
@Validated
public class LinkDto   {

  private String title = null;

  private String url = null;

  public LinkDto title(String title) {
    this.title = title;
    return this;
  }

  /**
   * Get title
   * @return title
  **/
  public String getTitle() {
    return title;
  }

  public void setTitle(String title) {
    this.title = title;
  }

  public LinkDto url(String url) {
    this.url = url;
    return this;
  }

  /**
   * Get url
   * @return url
  **/
  public String getUrl() {
    return url;
  }

  public void setUrl(String url) {
    this.url = url;
  }


}

