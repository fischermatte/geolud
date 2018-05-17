package io.fischermatte.geolud.server.rest.api.v1.project;

import com.fasterxml.jackson.annotation.JsonProperty;
import io.swagger.annotations.ApiModelProperty;
import org.springframework.validation.annotation.Validated;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import java.util.ArrayList;
import java.util.List;

/**
 * ProjectDto
 */
@Validated
public class ProjectDto {
    @JsonProperty("id")
    private String id = null;

    @JsonProperty("title")
    private String title = null;

    @JsonProperty("description")
    private String description = null;

    @JsonProperty("period")
    private String period = null;

    @JsonProperty("customer")
    private CustomerDto customer = null;

    @JsonProperty("links")
    @Valid
    private List<LinkDto> links = null;

    public ProjectDto id(String id) {
        this.id = id;
        return this;
    }

    /**
     * Get id
     *
     * @return id
     **/
    @ApiModelProperty(required = true, value = "")
    @NotNull
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public ProjectDto title(String title) {
        this.title = title;
        return this;
    }

    /**
     * Get title
     *
     * @return title
     **/
    @ApiModelProperty(value = "")
    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public ProjectDto description(String description) {
        this.description = description;
        return this;
    }

    /**
     * Get description
     *
     * @return description
     **/
    @ApiModelProperty(value = "")
    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public ProjectDto period(String period) {
        this.period = period;
        return this;
    }

    /**
     * Get period
     *
     * @return period
     **/
    @ApiModelProperty(value = "")
    public String getPeriod() {
        return period;
    }

    public void setPeriod(String period) {
        this.period = period;
    }

    public ProjectDto customer(CustomerDto customer) {
        this.customer = customer;
        return this;
    }

    /**
     * Get customer
     *
     * @return customer
     **/
    @ApiModelProperty(value = "")
    @Valid
    public CustomerDto getCustomer() {
        return customer;
    }

    public void setCustomer(CustomerDto customer) {
        this.customer = customer;
    }

    public ProjectDto links(List<LinkDto> links) {
        this.links = links;
        return this;
    }

    public ProjectDto addLinksItem(LinkDto linksItem) {
        if (this.links == null) {
            this.links = new ArrayList<>();
        }
        this.links.add(linksItem);
        return this;
    }

    /**
     * Get links
     *
     * @return links
     **/
    @ApiModelProperty(value = "")
    @Valid
    public List<LinkDto> getLinks() {
        return links;
    }

    public void setLinks(List<LinkDto> links) {
        this.links = links;
    }


}
