import gql from 'graphql-tag';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  clients: Array<Client>;
  client: Client;
  ingredient: Ingredient;
  ingredients: Array<Ingredient>;
  meal: Meal;
  meals: Array<Meal>;
  order: Order;
  orders: Array<Order>;
  item: Item;
  items: Array<Item>;
};


export type QueryIngredientArgs = {
  _id: Scalars['String'];
};


export type QueryMealArgs = {
  _id: Scalars['String'];
};


export type QueryOrderArgs = {
  _id: Scalars['String'];
};


export type QueryItemArgs = {
  _id: Scalars['String'];
};

export type Client = {
  __typename?: 'Client';
  _id: Scalars['ID'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
};

export type Ingredient = {
  __typename?: 'Ingredient';
  _id: Scalars['ID'];
  name: Scalars['String'];
  measureUnit: Scalars['String'];
};

export type Meal = {
  __typename?: 'Meal';
  _id: Scalars['ID'];
  name: Scalars['String'];
  sizes?: Maybe<Array<Scalars['String']>>;
  details: Array<MealDetail>;
};

export type MealDetail = {
  __typename?: 'MealDetail';
  ingredient: Ingredient;
  quantity: Scalars['Float'];
};

export type Order = {
  __typename?: 'Order';
  _id: Scalars['ID'];
  total: Scalars['String'];
  details: Array<OrderDetail>;
  client?: Maybe<Client>;
};

export type OrderDetail = {
  __typename?: 'OrderDetail';
  meal?: Maybe<Meal>;
  item?: Maybe<Item>;
  size?: Maybe<Scalars['String']>;
  additional_meal_info?: Maybe<Array<AdditionalMealInfo>>;
  quantity: Scalars['Float'];
};

export type Item = {
  __typename?: 'Item';
  _id: Scalars['ID'];
  name: Scalars['String'];
  sizes?: Maybe<Array<Scalars['String']>>;
};

export type AdditionalMealInfo = {
  __typename?: 'AdditionalMealInfo';
  ingredient: Ingredient;
  quantity: Scalars['Float'];
  price: Scalars['Float'];
  difference: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createClient: Client;
  deleteClient: Scalars['Boolean'];
  createIngredient: Ingredient;
  deleteIngredient: Scalars['Boolean'];
  editIngredient: Ingredient;
  createMeal: Meal;
  createOrder: Order;
  createItem: Item;
};


export type MutationCreateClientArgs = {
  createClientInput: CreateClientInput;
};


export type MutationDeleteClientArgs = {
  _id: Scalars['String'];
};


export type MutationCreateIngredientArgs = {
  createIngredientInput: CreateIngredientInput;
};


export type MutationDeleteIngredientArgs = {
  _id: Scalars['String'];
};


export type MutationEditIngredientArgs = {
  measureUnit?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  _id: Scalars['String'];
};


export type MutationCreateMealArgs = {
  createMealInput: CreateMealInput;
};


export type MutationCreateOrderArgs = {
  createOrderInput: CreateOrderInput;
};


export type MutationCreateItemArgs = {
  createItemInput: CreateItemInput;
};

export type CreateClientInput = {
  firstName: Scalars['String'];
  lastName: Scalars['String'];
};

export type CreateIngredientInput = {
  name: Scalars['String'];
  measureUnit: Scalars['String'];
};

export type CreateMealInput = {
  name: Scalars['String'];
  sizes?: Maybe<Array<Scalars['String']>>;
  details?: Maybe<Array<CreateMealDetailInput>>;
};

export type CreateMealDetailInput = {
  ingredient_id: Scalars['String'];
  quantity: Scalars['Float'];
};

export type CreateOrderInput = {
  total: Scalars['Float'];
  details?: Maybe<Array<CreateOrderDetailInput>>;
  client_id?: Maybe<Scalars['String']>;
};

export type CreateOrderDetailInput = {
  meal_id?: Maybe<Scalars['String']>;
  item_id?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['String']>;
  additional_meal_info?: Maybe<Array<AdditionalMealInfoInput>>;
  quantity: Scalars['Float'];
};

export type AdditionalMealInfoInput = {
  ingredient_id: Scalars['String'];
  quantity: Scalars['Float'];
  price: Scalars['Float'];
  difference: Scalars['String'];
};

export type CreateItemInput = {
  name: Scalars['String'];
  sizes?: Maybe<Array<Scalars['String']>>;
};

export type Subscription = {
  __typename?: 'Subscription';
  ingredientAdded: Ingredient;
};

export type GetClientsClientsPageQueryVariables = Exact<{ [key: string]: never; }>;


export type GetClientsClientsPageQuery = (
  { __typename?: 'Query' }
  & { clients: Array<(
    { __typename?: 'Client' }
    & Pick<Client, '_id' | 'firstName' | 'lastName'>
  )> }
);

export type GetIngredientsIngredientsPageQueryVariables = Exact<{ [key: string]: never; }>;


export type GetIngredientsIngredientsPageQuery = (
  { __typename?: 'Query' }
  & { ingredients: Array<(
    { __typename?: 'Ingredient' }
    & Pick<Ingredient, '_id' | 'name'>
  )> }
);

export type GetClientsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetClientsQuery = (
  { __typename?: 'Query' }
  & { clients: Array<(
    { __typename?: 'Client' }
    & Pick<Client, '_id' | 'firstName' | 'lastName'>
  )> }
);

export type DeleteClientMutationVariables = Exact<{
  _id: Scalars['String'];
}>;


export type DeleteClientMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deleteClient'>
);

export type GetIngredientsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetIngredientsQuery = (
  { __typename?: 'Query' }
  & { ingredients: Array<(
    { __typename?: 'Ingredient' }
    & Pick<Ingredient, '_id' | 'name' | 'measureUnit'>
  )> }
);

export type CreateIngredientMutationVariables = Exact<{
  input: CreateIngredientInput;
}>;


export type CreateIngredientMutation = (
  { __typename?: 'Mutation' }
  & { createIngredient: (
    { __typename?: 'Ingredient' }
    & Pick<Ingredient, '_id' | 'name' | 'measureUnit'>
  ) }
);

export type DeleteIngredientMutationVariables = Exact<{
  _id: Scalars['String'];
}>;


export type DeleteIngredientMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deleteIngredient'>
);

export type EditIngredientMutationVariables = Exact<{
  _id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  measureUnit?: Maybe<Scalars['String']>;
}>;


export type EditIngredientMutation = (
  { __typename?: 'Mutation' }
  & { editIngredient: (
    { __typename?: 'Ingredient' }
    & Pick<Ingredient, '_id' | 'name' | 'measureUnit'>
  ) }
);

export type FindIngredientQueryVariables = Exact<{
  _id: Scalars['String'];
}>;


export type FindIngredientQuery = (
  { __typename?: 'Query' }
  & { ingredient: (
    { __typename?: 'Ingredient' }
    & Pick<Ingredient, '_id' | 'name' | 'measureUnit'>
  ) }
);

export type GetMealsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMealsQuery = (
  { __typename?: 'Query' }
  & { meals: Array<(
    { __typename?: 'Meal' }
    & Pick<Meal, '_id' | 'name' | 'sizes'>
    & { details: Array<(
      { __typename?: 'MealDetail' }
      & Pick<MealDetail, 'quantity'>
      & { ingredient: (
        { __typename?: 'Ingredient' }
        & Pick<Ingredient, '_id' | 'measureUnit' | 'name'>
      ) }
    )> }
  )> }
);


export const GetClientsClientsPageDocument = gql`
    query getClientsClientsPage {
  clients {
    _id
    firstName
    lastName
  }
}
    `;
export type GetClientsClientsPageComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetClientsClientsPageQuery, GetClientsClientsPageQueryVariables>, 'query'>;

    export const GetClientsClientsPageComponent = (props: GetClientsClientsPageComponentProps) => (
      <ApolloReactComponents.Query<GetClientsClientsPageQuery, GetClientsClientsPageQueryVariables> query={GetClientsClientsPageDocument} {...props} />
    );
    
export type GetClientsClientsPageProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetClientsClientsPageQuery, GetClientsClientsPageQueryVariables>
    } & TChildProps;
export function withGetClientsClientsPage<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetClientsClientsPageQuery,
  GetClientsClientsPageQueryVariables,
  GetClientsClientsPageProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetClientsClientsPageQuery, GetClientsClientsPageQueryVariables, GetClientsClientsPageProps<TChildProps, TDataName>>(GetClientsClientsPageDocument, {
      alias: 'getClientsClientsPage',
      ...operationOptions
    });
};
export type GetClientsClientsPageQueryResult = ApolloReactCommon.QueryResult<GetClientsClientsPageQuery, GetClientsClientsPageQueryVariables>;
export const GetIngredientsIngredientsPageDocument = gql`
    query getIngredientsIngredientsPage {
  ingredients {
    _id
    name
  }
}
    `;
export type GetIngredientsIngredientsPageComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetIngredientsIngredientsPageQuery, GetIngredientsIngredientsPageQueryVariables>, 'query'>;

    export const GetIngredientsIngredientsPageComponent = (props: GetIngredientsIngredientsPageComponentProps) => (
      <ApolloReactComponents.Query<GetIngredientsIngredientsPageQuery, GetIngredientsIngredientsPageQueryVariables> query={GetIngredientsIngredientsPageDocument} {...props} />
    );
    
export type GetIngredientsIngredientsPageProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetIngredientsIngredientsPageQuery, GetIngredientsIngredientsPageQueryVariables>
    } & TChildProps;
export function withGetIngredientsIngredientsPage<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetIngredientsIngredientsPageQuery,
  GetIngredientsIngredientsPageQueryVariables,
  GetIngredientsIngredientsPageProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetIngredientsIngredientsPageQuery, GetIngredientsIngredientsPageQueryVariables, GetIngredientsIngredientsPageProps<TChildProps, TDataName>>(GetIngredientsIngredientsPageDocument, {
      alias: 'getIngredientsIngredientsPage',
      ...operationOptions
    });
};
export type GetIngredientsIngredientsPageQueryResult = ApolloReactCommon.QueryResult<GetIngredientsIngredientsPageQuery, GetIngredientsIngredientsPageQueryVariables>;
export const GetClientsDocument = gql`
    query getClients {
  clients {
    _id
    firstName
    lastName
  }
}
    `;
export type GetClientsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetClientsQuery, GetClientsQueryVariables>, 'query'>;

    export const GetClientsComponent = (props: GetClientsComponentProps) => (
      <ApolloReactComponents.Query<GetClientsQuery, GetClientsQueryVariables> query={GetClientsDocument} {...props} />
    );
    
export type GetClientsProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetClientsQuery, GetClientsQueryVariables>
    } & TChildProps;
export function withGetClients<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetClientsQuery,
  GetClientsQueryVariables,
  GetClientsProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetClientsQuery, GetClientsQueryVariables, GetClientsProps<TChildProps, TDataName>>(GetClientsDocument, {
      alias: 'getClients',
      ...operationOptions
    });
};
export type GetClientsQueryResult = ApolloReactCommon.QueryResult<GetClientsQuery, GetClientsQueryVariables>;
export const DeleteClientDocument = gql`
    mutation deleteClient($_id: String!) {
  deleteClient(_id: $_id)
}
    `;
export type DeleteClientMutationFn = ApolloReactCommon.MutationFunction<DeleteClientMutation, DeleteClientMutationVariables>;
export type DeleteClientComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<DeleteClientMutation, DeleteClientMutationVariables>, 'mutation'>;

    export const DeleteClientComponent = (props: DeleteClientComponentProps) => (
      <ApolloReactComponents.Mutation<DeleteClientMutation, DeleteClientMutationVariables> mutation={DeleteClientDocument} {...props} />
    );
    
export type DeleteClientProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<DeleteClientMutation, DeleteClientMutationVariables>
    } & TChildProps;
export function withDeleteClient<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DeleteClientMutation,
  DeleteClientMutationVariables,
  DeleteClientProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, DeleteClientMutation, DeleteClientMutationVariables, DeleteClientProps<TChildProps, TDataName>>(DeleteClientDocument, {
      alias: 'deleteClient',
      ...operationOptions
    });
};
export type DeleteClientMutationResult = ApolloReactCommon.MutationResult<DeleteClientMutation>;
export type DeleteClientMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteClientMutation, DeleteClientMutationVariables>;
export const GetIngredientsDocument = gql`
    query getIngredients {
  ingredients {
    _id
    name
    measureUnit
  }
}
    `;
export type GetIngredientsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetIngredientsQuery, GetIngredientsQueryVariables>, 'query'>;

    export const GetIngredientsComponent = (props: GetIngredientsComponentProps) => (
      <ApolloReactComponents.Query<GetIngredientsQuery, GetIngredientsQueryVariables> query={GetIngredientsDocument} {...props} />
    );
    
export type GetIngredientsProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetIngredientsQuery, GetIngredientsQueryVariables>
    } & TChildProps;
export function withGetIngredients<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetIngredientsQuery,
  GetIngredientsQueryVariables,
  GetIngredientsProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetIngredientsQuery, GetIngredientsQueryVariables, GetIngredientsProps<TChildProps, TDataName>>(GetIngredientsDocument, {
      alias: 'getIngredients',
      ...operationOptions
    });
};
export type GetIngredientsQueryResult = ApolloReactCommon.QueryResult<GetIngredientsQuery, GetIngredientsQueryVariables>;
export const CreateIngredientDocument = gql`
    mutation createIngredient($input: CreateIngredientInput!) {
  createIngredient(createIngredientInput: $input) {
    _id
    name
    measureUnit
  }
}
    `;
export type CreateIngredientMutationFn = ApolloReactCommon.MutationFunction<CreateIngredientMutation, CreateIngredientMutationVariables>;
export type CreateIngredientComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreateIngredientMutation, CreateIngredientMutationVariables>, 'mutation'>;

    export const CreateIngredientComponent = (props: CreateIngredientComponentProps) => (
      <ApolloReactComponents.Mutation<CreateIngredientMutation, CreateIngredientMutationVariables> mutation={CreateIngredientDocument} {...props} />
    );
    
export type CreateIngredientProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<CreateIngredientMutation, CreateIngredientMutationVariables>
    } & TChildProps;
export function withCreateIngredient<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateIngredientMutation,
  CreateIngredientMutationVariables,
  CreateIngredientProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, CreateIngredientMutation, CreateIngredientMutationVariables, CreateIngredientProps<TChildProps, TDataName>>(CreateIngredientDocument, {
      alias: 'createIngredient',
      ...operationOptions
    });
};
export type CreateIngredientMutationResult = ApolloReactCommon.MutationResult<CreateIngredientMutation>;
export type CreateIngredientMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateIngredientMutation, CreateIngredientMutationVariables>;
export const DeleteIngredientDocument = gql`
    mutation deleteIngredient($_id: String!) {
  deleteIngredient(_id: $_id)
}
    `;
export type DeleteIngredientMutationFn = ApolloReactCommon.MutationFunction<DeleteIngredientMutation, DeleteIngredientMutationVariables>;
export type DeleteIngredientComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<DeleteIngredientMutation, DeleteIngredientMutationVariables>, 'mutation'>;

    export const DeleteIngredientComponent = (props: DeleteIngredientComponentProps) => (
      <ApolloReactComponents.Mutation<DeleteIngredientMutation, DeleteIngredientMutationVariables> mutation={DeleteIngredientDocument} {...props} />
    );
    
export type DeleteIngredientProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<DeleteIngredientMutation, DeleteIngredientMutationVariables>
    } & TChildProps;
export function withDeleteIngredient<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DeleteIngredientMutation,
  DeleteIngredientMutationVariables,
  DeleteIngredientProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, DeleteIngredientMutation, DeleteIngredientMutationVariables, DeleteIngredientProps<TChildProps, TDataName>>(DeleteIngredientDocument, {
      alias: 'deleteIngredient',
      ...operationOptions
    });
};
export type DeleteIngredientMutationResult = ApolloReactCommon.MutationResult<DeleteIngredientMutation>;
export type DeleteIngredientMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteIngredientMutation, DeleteIngredientMutationVariables>;
export const EditIngredientDocument = gql`
    mutation editIngredient($_id: String!, $name: String, $measureUnit: String) {
  editIngredient(_id: $_id, name: $name, measureUnit: $measureUnit) {
    _id
    name
    measureUnit
  }
}
    `;
export type EditIngredientMutationFn = ApolloReactCommon.MutationFunction<EditIngredientMutation, EditIngredientMutationVariables>;
export type EditIngredientComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<EditIngredientMutation, EditIngredientMutationVariables>, 'mutation'>;

    export const EditIngredientComponent = (props: EditIngredientComponentProps) => (
      <ApolloReactComponents.Mutation<EditIngredientMutation, EditIngredientMutationVariables> mutation={EditIngredientDocument} {...props} />
    );
    
export type EditIngredientProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<EditIngredientMutation, EditIngredientMutationVariables>
    } & TChildProps;
export function withEditIngredient<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  EditIngredientMutation,
  EditIngredientMutationVariables,
  EditIngredientProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, EditIngredientMutation, EditIngredientMutationVariables, EditIngredientProps<TChildProps, TDataName>>(EditIngredientDocument, {
      alias: 'editIngredient',
      ...operationOptions
    });
};
export type EditIngredientMutationResult = ApolloReactCommon.MutationResult<EditIngredientMutation>;
export type EditIngredientMutationOptions = ApolloReactCommon.BaseMutationOptions<EditIngredientMutation, EditIngredientMutationVariables>;
export const FindIngredientDocument = gql`
    query findIngredient($_id: String!) {
  ingredient(_id: $_id) {
    _id
    name
    measureUnit
  }
}
    `;
export type FindIngredientComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<FindIngredientQuery, FindIngredientQueryVariables>, 'query'> & ({ variables: FindIngredientQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const FindIngredientComponent = (props: FindIngredientComponentProps) => (
      <ApolloReactComponents.Query<FindIngredientQuery, FindIngredientQueryVariables> query={FindIngredientDocument} {...props} />
    );
    
export type FindIngredientProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<FindIngredientQuery, FindIngredientQueryVariables>
    } & TChildProps;
export function withFindIngredient<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  FindIngredientQuery,
  FindIngredientQueryVariables,
  FindIngredientProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, FindIngredientQuery, FindIngredientQueryVariables, FindIngredientProps<TChildProps, TDataName>>(FindIngredientDocument, {
      alias: 'findIngredient',
      ...operationOptions
    });
};
export type FindIngredientQueryResult = ApolloReactCommon.QueryResult<FindIngredientQuery, FindIngredientQueryVariables>;
export const GetMealsDocument = gql`
    query getMeals {
  meals {
    _id
    name
    sizes
    details {
      ingredient {
        _id
        measureUnit
        name
      }
      quantity
    }
  }
}
    `;
export type GetMealsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetMealsQuery, GetMealsQueryVariables>, 'query'>;

    export const GetMealsComponent = (props: GetMealsComponentProps) => (
      <ApolloReactComponents.Query<GetMealsQuery, GetMealsQueryVariables> query={GetMealsDocument} {...props} />
    );
    
export type GetMealsProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetMealsQuery, GetMealsQueryVariables>
    } & TChildProps;
export function withGetMeals<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetMealsQuery,
  GetMealsQueryVariables,
  GetMealsProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetMealsQuery, GetMealsQueryVariables, GetMealsProps<TChildProps, TDataName>>(GetMealsDocument, {
      alias: 'getMeals',
      ...operationOptions
    });
};
export type GetMealsQueryResult = ApolloReactCommon.QueryResult<GetMealsQuery, GetMealsQueryVariables>;