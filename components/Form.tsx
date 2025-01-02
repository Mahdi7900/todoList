'use client';

import React, {BaseSyntheticEvent, FocusEventHandler} from 'react';
import {
    Control,
    FieldValues,
    FormProvider,
    FormState,
    Resolver,
    SubmitErrorHandler,
    useForm,
    UseFormReturn,
    ValidationMode,
} from 'react-hook-form';

export type FormProps<Fields extends FieldValues = any> = {
    onSubmit?: (values: Fields, form: UseFormReturn<Fields>, e: BaseSyntheticEvent | undefined) => void,
    onBlur?: FocusEventHandler<HTMLFormElement>,
    submitBtn?: React.ReactHTMLElement<any>,
    onError?: SubmitErrorHandler<Fields>,
    form?: UseFormReturn<Fields>,
    resolver?: Resolver<Fields>,
    mode?: keyof ValidationMode,
    className?: string,
    defaultValues?: any,
    children: React.ReactNode,
}
export const Form = <Fields extends FieldValues = any>({
                                                           children,
                                                           onSubmit,
                                                           onBlur,
                                                           submitBtn,
                                                           onError,
                                                           form,
                                                           mode = 'onSubmit',
                                                           resolver,
                                                           className,
                                                           defaultValues,
                                                       }: FormProps<Fields>) => {

    const rhf = useForm({defaultValues, resolver, mode});
    const formHook = form ?? rhf;
    const {handleSubmit} = formHook;


    return (
        <FormProvider
            formState={formHook.formState as FormState<FieldValues>}
            reset={formHook.reset}
            handleSubmit={formHook.handleSubmit}
            getFieldState={formHook.getFieldState}
            resetField={formHook.resetField}
            control={formHook.control as Control<FieldValues, any>}
            clearErrors={formHook.clearErrors}
            getValues={formHook.getValues}
            register={formHook.register}
            setError={formHook.setError}
            setFocus={formHook.setFocus}
            setValue={formHook.setValue}
            trigger={formHook.trigger}
            watch={formHook.watch}
            unregister={formHook.unregister}>
            <form
                onSubmit={handleSubmit((v, e) => onSubmit?.(v, formHook, e), onError)}
                onBlur={onBlur}
                className={className}
                noValidate
            >
                {children}
                {submitBtn}
            </form>
        </FormProvider>
    );
};
