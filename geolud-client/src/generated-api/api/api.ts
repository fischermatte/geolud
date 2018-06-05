export * from './contact.service';
import { ContactService } from './contact.service';
export * from './project.service';
import { ProjectService } from './project.service';
export const APIS = [ContactService, ProjectService];
