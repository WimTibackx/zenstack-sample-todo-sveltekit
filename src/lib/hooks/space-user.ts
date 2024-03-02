/* eslint-disable */
import type { Prisma, SpaceUser } from '@prisma/client';
import { derived } from 'svelte/store';
import type { MutationOptions, CreateQueryOptions, CreateInfiniteQueryOptions } from '@tanstack/svelte-query';
import { getHooksContext } from '@zenstackhq/tanstack-query/runtime/svelte';
import { useModelQuery, useInfiniteModelQuery, useModelMutation } from '@zenstackhq/tanstack-query/runtime/svelte';
import type { PickEnumerable, CheckSelect, QueryError } from '@zenstackhq/tanstack-query/runtime';
import metadata from './__model_meta';
type DefaultError = QueryError;

export function useCreateSpaceUser(
    options?: Omit<MutationOptions<SpaceUser | undefined, DefaultError, Prisma.SpaceUserCreateArgs>, 'mutationFn'>,
    invalidateQueries: boolean = true,
    optimisticUpdate: boolean = false,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.SpaceUserCreateArgs, DefaultError, SpaceUser, true>(
        'SpaceUser',
        'POST',
        `${endpoint}/spaceUser/create`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        true,
        optimisticUpdate,
    );
    const mutation = derived(_mutation, (value) => ({
        ...value,
        mutateAsync: async <T extends Prisma.SpaceUserCreateArgs>(
            args: Prisma.SelectSubset<T, Prisma.SpaceUserCreateArgs>,
            options?: Omit<
                MutationOptions<
                    CheckSelect<T, SpaceUser, Prisma.SpaceUserGetPayload<T>> | undefined,
                    DefaultError,
                    Prisma.SelectSubset<T, Prisma.SpaceUserCreateArgs>
                >,
                'mutationFn'
            >,
        ) => {
            return (await value.mutateAsync(args, options as any)) as
                | CheckSelect<T, SpaceUser, Prisma.SpaceUserGetPayload<T>>
                | undefined;
        },
    }));
    return mutation;
}

export function useCreateManySpaceUser(
    options?: Omit<MutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SpaceUserCreateManyArgs>, 'mutationFn'>,
    invalidateQueries: boolean = true,
    optimisticUpdate: boolean = false,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.SpaceUserCreateManyArgs, DefaultError, Prisma.BatchPayload, false>(
        'SpaceUser',
        'POST',
        `${endpoint}/spaceUser/createMany`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        false,
        optimisticUpdate,
    );
    const mutation = derived(_mutation, (value) => ({
        ...value,
        mutateAsync: async <T extends Prisma.SpaceUserCreateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.SpaceUserCreateManyArgs>,
            options?: Omit<
                MutationOptions<
                    Prisma.BatchPayload,
                    DefaultError,
                    Prisma.SelectSubset<T, Prisma.SpaceUserCreateManyArgs>
                >,
                'mutationFn'
            >,
        ) => {
            return (await value.mutateAsync(args, options as any)) as Prisma.BatchPayload;
        },
    }));
    return mutation;
}

export function useFindManySpaceUser<
    TArgs extends Prisma.SpaceUserFindManyArgs,
    TQueryFnData = Array<Prisma.SpaceUserGetPayload<TArgs> & { $optimistic?: boolean }>,
    TData = TQueryFnData,
    TError = DefaultError,
>(
    args?: Prisma.SelectSubset<TArgs, Prisma.SpaceUserFindManyArgs>,
    options?: Omit<CreateQueryOptions<TQueryFnData, TError, TData>, 'queryKey'>,
    optimisticUpdate: boolean = true,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>(
        'SpaceUser',
        `${endpoint}/spaceUser/findMany`,
        args,
        options,
        fetch,
        optimisticUpdate,
    );
}

export function useInfiniteFindManySpaceUser<
    TArgs extends Prisma.SpaceUserFindManyArgs,
    TQueryFnData = Array<Prisma.SpaceUserGetPayload<TArgs>>,
    TData = TQueryFnData,
    TError = DefaultError,
>(
    args?: Prisma.SelectSubset<TArgs, Prisma.SpaceUserFindManyArgs>,
    options?: Omit<CreateInfiniteQueryOptions<TQueryFnData, TError, TData>, 'queryKey'>,
) {
    const { endpoint, fetch } = getHooksContext();
    return useInfiniteModelQuery<TQueryFnData, TData, TError>(
        'SpaceUser',
        `${endpoint}/spaceUser/findMany`,
        args,
        options,
        fetch,
    );
}

export function useFindUniqueSpaceUser<
    TArgs extends Prisma.SpaceUserFindUniqueArgs,
    TQueryFnData = Prisma.SpaceUserGetPayload<TArgs> & { $optimistic?: boolean },
    TData = TQueryFnData,
    TError = DefaultError,
>(
    args: Prisma.SelectSubset<TArgs, Prisma.SpaceUserFindUniqueArgs>,
    options?: Omit<CreateQueryOptions<TQueryFnData, TError, TData>, 'queryKey'>,
    optimisticUpdate: boolean = true,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>(
        'SpaceUser',
        `${endpoint}/spaceUser/findUnique`,
        args,
        options,
        fetch,
        optimisticUpdate,
    );
}

export function useFindFirstSpaceUser<
    TArgs extends Prisma.SpaceUserFindFirstArgs,
    TQueryFnData = Prisma.SpaceUserGetPayload<TArgs> & { $optimistic?: boolean },
    TData = TQueryFnData,
    TError = DefaultError,
>(
    args?: Prisma.SelectSubset<TArgs, Prisma.SpaceUserFindFirstArgs>,
    options?: Omit<CreateQueryOptions<TQueryFnData, TError, TData>, 'queryKey'>,
    optimisticUpdate: boolean = true,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>(
        'SpaceUser',
        `${endpoint}/spaceUser/findFirst`,
        args,
        options,
        fetch,
        optimisticUpdate,
    );
}

export function useUpdateSpaceUser(
    options?: Omit<MutationOptions<SpaceUser | undefined, DefaultError, Prisma.SpaceUserUpdateArgs>, 'mutationFn'>,
    invalidateQueries: boolean = true,
    optimisticUpdate: boolean = false,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.SpaceUserUpdateArgs, DefaultError, SpaceUser, true>(
        'SpaceUser',
        'PUT',
        `${endpoint}/spaceUser/update`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        true,
        optimisticUpdate,
    );
    const mutation = derived(_mutation, (value) => ({
        ...value,
        mutateAsync: async <T extends Prisma.SpaceUserUpdateArgs>(
            args: Prisma.SelectSubset<T, Prisma.SpaceUserUpdateArgs>,
            options?: Omit<
                MutationOptions<
                    CheckSelect<T, SpaceUser, Prisma.SpaceUserGetPayload<T>> | undefined,
                    DefaultError,
                    Prisma.SelectSubset<T, Prisma.SpaceUserUpdateArgs>
                >,
                'mutationFn'
            >,
        ) => {
            return (await value.mutateAsync(args, options as any)) as
                | CheckSelect<T, SpaceUser, Prisma.SpaceUserGetPayload<T>>
                | undefined;
        },
    }));
    return mutation;
}

export function useUpdateManySpaceUser(
    options?: Omit<MutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SpaceUserUpdateManyArgs>, 'mutationFn'>,
    invalidateQueries: boolean = true,
    optimisticUpdate: boolean = false,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.SpaceUserUpdateManyArgs, DefaultError, Prisma.BatchPayload, false>(
        'SpaceUser',
        'PUT',
        `${endpoint}/spaceUser/updateMany`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        false,
        optimisticUpdate,
    );
    const mutation = derived(_mutation, (value) => ({
        ...value,
        mutateAsync: async <T extends Prisma.SpaceUserUpdateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.SpaceUserUpdateManyArgs>,
            options?: Omit<
                MutationOptions<
                    Prisma.BatchPayload,
                    DefaultError,
                    Prisma.SelectSubset<T, Prisma.SpaceUserUpdateManyArgs>
                >,
                'mutationFn'
            >,
        ) => {
            return (await value.mutateAsync(args, options as any)) as Prisma.BatchPayload;
        },
    }));
    return mutation;
}

export function useUpsertSpaceUser(
    options?: Omit<MutationOptions<SpaceUser | undefined, DefaultError, Prisma.SpaceUserUpsertArgs>, 'mutationFn'>,
    invalidateQueries: boolean = true,
    optimisticUpdate: boolean = false,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.SpaceUserUpsertArgs, DefaultError, SpaceUser, true>(
        'SpaceUser',
        'POST',
        `${endpoint}/spaceUser/upsert`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        true,
        optimisticUpdate,
    );
    const mutation = derived(_mutation, (value) => ({
        ...value,
        mutateAsync: async <T extends Prisma.SpaceUserUpsertArgs>(
            args: Prisma.SelectSubset<T, Prisma.SpaceUserUpsertArgs>,
            options?: Omit<
                MutationOptions<
                    CheckSelect<T, SpaceUser, Prisma.SpaceUserGetPayload<T>> | undefined,
                    DefaultError,
                    Prisma.SelectSubset<T, Prisma.SpaceUserUpsertArgs>
                >,
                'mutationFn'
            >,
        ) => {
            return (await value.mutateAsync(args, options as any)) as
                | CheckSelect<T, SpaceUser, Prisma.SpaceUserGetPayload<T>>
                | undefined;
        },
    }));
    return mutation;
}

export function useDeleteSpaceUser(
    options?: Omit<MutationOptions<SpaceUser | undefined, DefaultError, Prisma.SpaceUserDeleteArgs>, 'mutationFn'>,
    invalidateQueries: boolean = true,
    optimisticUpdate: boolean = false,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.SpaceUserDeleteArgs, DefaultError, SpaceUser, true>(
        'SpaceUser',
        'DELETE',
        `${endpoint}/spaceUser/delete`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        true,
        optimisticUpdate,
    );
    const mutation = derived(_mutation, (value) => ({
        ...value,
        mutateAsync: async <T extends Prisma.SpaceUserDeleteArgs>(
            args: Prisma.SelectSubset<T, Prisma.SpaceUserDeleteArgs>,
            options?: Omit<
                MutationOptions<
                    CheckSelect<T, SpaceUser, Prisma.SpaceUserGetPayload<T>> | undefined,
                    DefaultError,
                    Prisma.SelectSubset<T, Prisma.SpaceUserDeleteArgs>
                >,
                'mutationFn'
            >,
        ) => {
            return (await value.mutateAsync(args, options as any)) as
                | CheckSelect<T, SpaceUser, Prisma.SpaceUserGetPayload<T>>
                | undefined;
        },
    }));
    return mutation;
}

export function useDeleteManySpaceUser(
    options?: Omit<MutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SpaceUserDeleteManyArgs>, 'mutationFn'>,
    invalidateQueries: boolean = true,
    optimisticUpdate: boolean = false,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.SpaceUserDeleteManyArgs, DefaultError, Prisma.BatchPayload, false>(
        'SpaceUser',
        'DELETE',
        `${endpoint}/spaceUser/deleteMany`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        false,
        optimisticUpdate,
    );
    const mutation = derived(_mutation, (value) => ({
        ...value,
        mutateAsync: async <T extends Prisma.SpaceUserDeleteManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.SpaceUserDeleteManyArgs>,
            options?: Omit<
                MutationOptions<
                    Prisma.BatchPayload,
                    DefaultError,
                    Prisma.SelectSubset<T, Prisma.SpaceUserDeleteManyArgs>
                >,
                'mutationFn'
            >,
        ) => {
            return (await value.mutateAsync(args, options as any)) as Prisma.BatchPayload;
        },
    }));
    return mutation;
}

export function useAggregateSpaceUser<
    TArgs extends Prisma.SpaceUserAggregateArgs,
    TQueryFnData = Prisma.GetSpaceUserAggregateType<TArgs>,
    TData = TQueryFnData,
    TError = DefaultError,
>(
    args: Prisma.SelectSubset<TArgs, Prisma.SpaceUserAggregateArgs>,
    options?: Omit<CreateQueryOptions<TQueryFnData, TError, TData>, 'queryKey'>,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>(
        'SpaceUser',
        `${endpoint}/spaceUser/aggregate`,
        args,
        options,
        fetch,
    );
}

export function useGroupBySpaceUser<
    TArgs extends Prisma.SpaceUserGroupByArgs,
    HasSelectOrTake extends Prisma.Or<
        Prisma.Extends<'skip', Prisma.Keys<TArgs>>,
        Prisma.Extends<'take', Prisma.Keys<TArgs>>
    >,
    OrderByArg extends Prisma.True extends HasSelectOrTake
        ? { orderBy: Prisma.SpaceUserGroupByArgs['orderBy'] }
        : { orderBy?: Prisma.SpaceUserGroupByArgs['orderBy'] },
    OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<TArgs['orderBy']>>>,
    ByFields extends Prisma.MaybeTupleToUnion<TArgs['by']>,
    ByValid extends Prisma.Has<ByFields, OrderFields>,
    HavingFields extends Prisma.GetHavingFields<TArgs['having']>,
    HavingValid extends Prisma.Has<ByFields, HavingFields>,
    ByEmpty extends TArgs['by'] extends never[] ? Prisma.True : Prisma.False,
    InputErrors extends ByEmpty extends Prisma.True
        ? `Error: "by" must not be empty.`
        : HavingValid extends Prisma.False
        ? {
              [P in HavingFields]: P extends ByFields
                  ? never
                  : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Prisma.Keys<TArgs>
        ? 'orderBy' extends Prisma.Keys<TArgs>
            ? ByValid extends Prisma.True
                ? {}
                : {
                      [P in OrderFields]: P extends ByFields
                          ? never
                          : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
            : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Prisma.Keys<TArgs>
        ? 'orderBy' extends Prisma.Keys<TArgs>
            ? ByValid extends Prisma.True
                ? {}
                : {
                      [P in OrderFields]: P extends ByFields
                          ? never
                          : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
            : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends Prisma.True
        ? {}
        : {
              [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    TQueryFnData = {} extends InputErrors
        ? Array<
              PickEnumerable<Prisma.SpaceUserGroupByOutputType, TArgs['by']> & {
                  [P in keyof TArgs & keyof Prisma.SpaceUserGroupByOutputType]: P extends '_count'
                      ? TArgs[P] extends boolean
                          ? number
                          : Prisma.GetScalarType<TArgs[P], Prisma.SpaceUserGroupByOutputType[P]>
                      : Prisma.GetScalarType<TArgs[P], Prisma.SpaceUserGroupByOutputType[P]>;
              }
          >
        : InputErrors,
    TData = TQueryFnData,
    TError = DefaultError,
>(
    args: Prisma.SelectSubset<
        TArgs,
        Prisma.SubsetIntersection<TArgs, Prisma.SpaceUserGroupByArgs, OrderByArg> & InputErrors
    >,
    options?: Omit<CreateQueryOptions<TQueryFnData, TError, TData>, 'queryKey'>,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>(
        'SpaceUser',
        `${endpoint}/spaceUser/groupBy`,
        args,
        options,
        fetch,
    );
}

export function useCountSpaceUser<
    TArgs extends Prisma.SpaceUserCountArgs,
    TQueryFnData = TArgs extends { select: any }
        ? TArgs['select'] extends true
            ? number
            : Prisma.GetScalarType<TArgs['select'], Prisma.SpaceUserCountAggregateOutputType>
        : number,
    TData = TQueryFnData,
    TError = DefaultError,
>(
    args?: Prisma.SelectSubset<TArgs, Prisma.SpaceUserCountArgs>,
    options?: Omit<CreateQueryOptions<TQueryFnData, TError, TData>, 'queryKey'>,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('SpaceUser', `${endpoint}/spaceUser/count`, args, options, fetch);
}
