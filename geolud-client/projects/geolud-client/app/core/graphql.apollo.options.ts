import { APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular-link-http';
import { environment } from '../../environments/environment';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { Provider } from '@angular/core';
import { ApolloClientOptions } from 'apollo-client';

export const GraphqlApolloOptionsProvider: Provider = {
  provide: APOLLO_OPTIONS,
  useFactory(httpLink: HttpLink): ApolloClientOptions<any> {
    return {
      link: httpLink.create({ uri: environment.appConfig.apiBase + '/graphql' }),
      cache: new InMemoryCache(),
    };
  },
  deps: [HttpLink],
};
