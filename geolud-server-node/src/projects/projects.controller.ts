import { Controller, Get, Param } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { Project } from './project';

@Controller('projects')
export class ProjectsController {

    @Get(':id')
    findById(@Param('id') id: string): Observable<Project> {
        return of(null);
    }

    @Get()
    findAll(): Observable<Project[]> {
        return of([]);
    }
}