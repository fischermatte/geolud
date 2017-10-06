package io.fischermatte.icke.server.project;


import io.fischermatte.icke.api.Customer;
import io.fischermatte.icke.api.IckeAPIPaths;
import io.fischermatte.icke.api.Project;
import io.fischermatte.icke.server.project.data.CustomerData;
import io.fischermatte.icke.server.project.data.IntervalData;
import io.fischermatte.icke.server.project.data.ProjectData;
import io.fischermatte.icke.server.project.data.ProjectDataRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

import static java.util.Collections.emptyList;
import static org.springframework.util.ObjectUtils.isEmpty;
import static org.springframework.util.StringUtils.hasText;

@RestController
@RequestMapping(path = IckeAPIPaths.Projects.PATH)
public class ProjectController {

    private final ProjectDataRepository projectRepository;

    public ProjectController(ProjectDataRepository projectRepository) {
        this.projectRepository = projectRepository;
    }

    @GetMapping
    @ResponseBody
    public List<Project> getAll() {
        return mapToApi(projectRepository.findAll());
    }

    private List<Project> mapToApi(List<ProjectData> source) {
        if (isEmpty(source)) {
            return emptyList();
        }
        List<Project> target = new ArrayList<>();
        source.forEach(project -> target.add(mapToApi(project)));
        return target;
    }

    private Project mapToApi(ProjectData source) {
        Project target = new Project();
        target.setId(source.getId());
        target.setTitle(source.getTitle());
        target.setCustomer(mapToApi(source.getCustomer()));
        target.setPeriod(toPeriod(source.getInterval()));
        return target;
    }

    private String toPeriod(IntervalData interval) {
        if (interval == null) {
            return null;
        }
        String period = "";
        if (interval.getFrom() != null) {
            period = String.valueOf(interval.getFrom().getYear());
        }
        if (interval.getTo() != null) {
            String to = String.valueOf(interval.getTo().getYear());
            if (!to.equals(period)) {
                if (hasText(period)) {
                    period += "-";
                }
                period += to;
            }
        }
        return period;
    }

    private Customer mapToApi(CustomerData source) {
        Customer target = new Customer();
        target.setName(source.getName());
        target.setUrl(source.getUrl());
        return target;

    }
}
