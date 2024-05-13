/* eslint-disable */
import type { Prisma, Space } from "@zenstackhq/runtime/models";
import { derived } from 'svelte/store';
import type { MutationOptions, CreateQueryOptions, CreateInfiniteQueryOptions } from '@tanstack/svelte-query';
import type { InfiniteData, StoreOrVal } from '@tanstack/svelte-query';
import { getHooksContext } from '@zenstackhq/tanstack-query/runtime-v5/svelte';
import { useModelQuery, useInfiniteModelQuery, useModelMutation } from '@zenstackhq/tanstack-query/runtime-v5/svelte';
import type { PickEnumerable, CheckSelect, QueryError, ExtraQueryOptions, ExtraMutationOptions } from '@zenstackhq/tanstack-query/runtime-v5';
import type { PolicyCrudKind } from '@zenstackhq/runtime'
import metadata from './__model_meta';
type DefaultError = QueryError;

export function useCreateSpace(options?: Omit<(MutationOptions<(Space | undefined), DefaultError, Prisma.SpaceCreateArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.SpaceCreateArgs, DefaultError, Space, true>('Space', 'POST', `${endpoint}/space/create`, metadata, options, fetch, true)
        ;
    const mutation = derived(_mutation, value => ({
        ...value,
        mutateAsync: async <T extends Prisma.SpaceCreateArgs>(
            args: Prisma.SelectSubset<T, Prisma.SpaceCreateArgs>,
            options?: Omit<(MutationOptions<(CheckSelect<T, Space, Prisma.SpaceGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.SpaceCreateArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await value.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, Space, Prisma.SpaceGetPayload<T>> | undefined);
        },
    }));
    return mutation;
}

export function useCreateManySpace(options?: Omit<(MutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SpaceCreateManyArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.SpaceCreateManyArgs, DefaultError, Prisma.BatchPayload, false>('Space', 'POST', `${endpoint}/space/createMany`, metadata, options, fetch, false)
        ;
    const mutation = derived(_mutation, value => ({
        ...value,
        mutateAsync: async <T extends Prisma.SpaceCreateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.SpaceCreateManyArgs>,
            options?: Omit<(MutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.SpaceCreateManyArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await value.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    }));
    return mutation;
}

export function useFindManySpace<TArgs extends Prisma.SpaceFindManyArgs, TQueryFnData = Array<Prisma.SpaceGetPayload<TArgs> & { $optimistic?: boolean }>, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.SpaceFindManyArgs>, options?: (StoreOrVal<Omit<CreateQueryOptions<TQueryFnData, TError, TData>, 'queryKey'>> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('Space', `${endpoint}/space/findMany`, args, options, fetch);
}

export function useInfiniteFindManySpace<TArgs extends Prisma.SpaceFindManyArgs, TQueryFnData = Array<Prisma.SpaceGetPayload<TArgs>>, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.SpaceFindManyArgs>, options?: StoreOrVal<Omit<CreateInfiniteQueryOptions<TQueryFnData, TError, InfiniteData<TData>>, 'queryKey'>>) {
    options = options ?? { initialPageParam: undefined, getNextPageParam: () => null };
    const { endpoint, fetch } = getHooksContext();
    return useInfiniteModelQuery<TQueryFnData, TData, TError>('Space', `${endpoint}/space/findMany`, args, options, fetch);
}

export function useFindUniqueSpace<TArgs extends Prisma.SpaceFindUniqueArgs, TQueryFnData = Prisma.SpaceGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.SpaceFindUniqueArgs>, options?: (StoreOrVal<Omit<CreateQueryOptions<TQueryFnData, TError, TData>, 'queryKey'>> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('Space', `${endpoint}/space/findUnique`, args, options, fetch);
}

export function useFindFirstSpace<TArgs extends Prisma.SpaceFindFirstArgs, TQueryFnData = Prisma.SpaceGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.SpaceFindFirstArgs>, options?: (StoreOrVal<Omit<CreateQueryOptions<TQueryFnData, TError, TData>, 'queryKey'>> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('Space', `${endpoint}/space/findFirst`, args, options, fetch);
}

export function useUpdateSpace(options?: Omit<(MutationOptions<(Space | undefined), DefaultError, Prisma.SpaceUpdateArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.SpaceUpdateArgs, DefaultError, Space, true>('Space', 'PUT', `${endpoint}/space/update`, metadata, options, fetch, true)
        ;
    const mutation = derived(_mutation, value => ({
        ...value,
        mutateAsync: async <T extends Prisma.SpaceUpdateArgs>(
            args: Prisma.SelectSubset<T, Prisma.SpaceUpdateArgs>,
            options?: Omit<(MutationOptions<(CheckSelect<T, Space, Prisma.SpaceGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.SpaceUpdateArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await value.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, Space, Prisma.SpaceGetPayload<T>> | undefined);
        },
    }));
    return mutation;
}

export function useUpdateManySpace(options?: Omit<(MutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SpaceUpdateManyArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.SpaceUpdateManyArgs, DefaultError, Prisma.BatchPayload, false>('Space', 'PUT', `${endpoint}/space/updateMany`, metadata, options, fetch, false)
        ;
    const mutation = derived(_mutation, value => ({
        ...value,
        mutateAsync: async <T extends Prisma.SpaceUpdateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.SpaceUpdateManyArgs>,
            options?: Omit<(MutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.SpaceUpdateManyArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await value.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    }));
    return mutation;
}

export function useUpsertSpace(options?: Omit<(MutationOptions<(Space | undefined), DefaultError, Prisma.SpaceUpsertArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.SpaceUpsertArgs, DefaultError, Space, true>('Space', 'POST', `${endpoint}/space/upsert`, metadata, options, fetch, true)
        ;
    const mutation = derived(_mutation, value => ({
        ...value,
        mutateAsync: async <T extends Prisma.SpaceUpsertArgs>(
            args: Prisma.SelectSubset<T, Prisma.SpaceUpsertArgs>,
            options?: Omit<(MutationOptions<(CheckSelect<T, Space, Prisma.SpaceGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.SpaceUpsertArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await value.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, Space, Prisma.SpaceGetPayload<T>> | undefined);
        },
    }));
    return mutation;
}

export function useDeleteSpace(options?: Omit<(MutationOptions<(Space | undefined), DefaultError, Prisma.SpaceDeleteArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.SpaceDeleteArgs, DefaultError, Space, true>('Space', 'DELETE', `${endpoint}/space/delete`, metadata, options, fetch, true)
        ;
    const mutation = derived(_mutation, value => ({
        ...value,
        mutateAsync: async <T extends Prisma.SpaceDeleteArgs>(
            args: Prisma.SelectSubset<T, Prisma.SpaceDeleteArgs>,
            options?: Omit<(MutationOptions<(CheckSelect<T, Space, Prisma.SpaceGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.SpaceDeleteArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await value.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, Space, Prisma.SpaceGetPayload<T>> | undefined);
        },
    }));
    return mutation;
}

export function useDeleteManySpace(options?: Omit<(MutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SpaceDeleteManyArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.SpaceDeleteManyArgs, DefaultError, Prisma.BatchPayload, false>('Space', 'DELETE', `${endpoint}/space/deleteMany`, metadata, options, fetch, false)
        ;
    const mutation = derived(_mutation, value => ({
        ...value,
        mutateAsync: async <T extends Prisma.SpaceDeleteManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.SpaceDeleteManyArgs>,
            options?: Omit<(MutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.SpaceDeleteManyArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await value.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    }));
    return mutation;
}

export function useAggregateSpace<TArgs extends Prisma.SpaceAggregateArgs, TQueryFnData = Prisma.GetSpaceAggregateType<TArgs>, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.SpaceAggregateArgs>, options?: (StoreOrVal<Omit<CreateQueryOptions<TQueryFnData, TError, TData>, 'queryKey'>> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('Space', `${endpoint}/space/aggregate`, args, options, fetch);
}

export function useGroupBySpace<TArgs extends Prisma.SpaceGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<TArgs>>, Prisma.Extends<'take', Prisma.Keys<TArgs>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? { orderBy: Prisma.SpaceGroupByArgs['orderBy'] } : { orderBy?: Prisma.SpaceGroupByArgs['orderBy'] }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<TArgs['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<TArgs['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<TArgs['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends TArgs['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True
    ? `Error: "by" must not be empty.`
    : HavingValid extends Prisma.False
    ? {
        [P in HavingFields]: P extends ByFields
        ? never
        : P extends string
        ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
        : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`,
        ]
    }[HavingFields]
    : 'take' extends Prisma.Keys<TArgs>
    ? 'orderBy' extends Prisma.Keys<TArgs>
    ? ByValid extends Prisma.True
    ? {}
    : {
        [P in OrderFields]: P extends ByFields
        ? never
        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
    }[OrderFields]
    : 'Error: If you provide "take", you also need to provide "orderBy"'
    : 'skip' extends Prisma.Keys<TArgs>
    ? 'orderBy' extends Prisma.Keys<TArgs>
    ? ByValid extends Prisma.True
    ? {}
    : {
        [P in OrderFields]: P extends ByFields
        ? never
        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
    }[OrderFields]
    : 'Error: If you provide "skip", you also need to provide "orderBy"'
    : ByValid extends Prisma.True
    ? {}
    : {
        [P in OrderFields]: P extends ByFields
        ? never
        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
    }[OrderFields], TQueryFnData = {} extends InputErrors ?
    Array<PickEnumerable<Prisma.SpaceGroupByOutputType, TArgs['by']> &
        {
            [P in ((keyof TArgs) & (keyof Prisma.SpaceGroupByOutputType))]: P extends '_count'
            ? TArgs[P] extends boolean
            ? number
            : Prisma.GetScalarType<TArgs[P], Prisma.SpaceGroupByOutputType[P]>
            : Prisma.GetScalarType<TArgs[P], Prisma.SpaceGroupByOutputType[P]>
        }
    > : InputErrors, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.SubsetIntersection<TArgs, Prisma.SpaceGroupByArgs, OrderByArg> & InputErrors>, options?: (StoreOrVal<Omit<CreateQueryOptions<TQueryFnData, TError, TData>, 'queryKey'>> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('Space', `${endpoint}/space/groupBy`, args, options, fetch);
}

export function useCountSpace<TArgs extends Prisma.SpaceCountArgs, TQueryFnData = TArgs extends { select: any; } ? TArgs['select'] extends true ? number : Prisma.GetScalarType<TArgs['select'], Prisma.SpaceCountAggregateOutputType> : number, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.SpaceCountArgs>, options?: (StoreOrVal<Omit<CreateQueryOptions<TQueryFnData, TError, TData>, 'queryKey'>> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('Space', `${endpoint}/space/count`, args, options, fetch);
}

export function useCheckSpace<TError = DefaultError>(args: { operation: PolicyCrudKind; where?: { id?: string; name?: string; slug?: string }; }, options?: (StoreOrVal<Omit<CreateQueryOptions<boolean, TError, boolean>, 'queryKey'>> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<boolean, boolean, TError>('Space', `${endpoint}/space/check`, args, options, fetch);
}
