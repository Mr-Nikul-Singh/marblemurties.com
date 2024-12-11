@extends('layouts.app')
@section('content')
    <div class="d-flex align-items-center flex-wrap gap-3 justify-content-between px-3">
        <h4 class="mb-0">
            {{ __('Flash Sales') }}
        </h4>

        @hasPermission('admin.flashSale.create')
            <a href="{{ route('admin.flashSale.create') }}" class="btn py-2.5 btn-primary">
                <i class="fa fa-plus-circle"></i>
                {{ __('Create New') }}
            </a>
        @endhasPermission
    </div>

    <div class="container-fluid mt-3">

        <div class="mb-3 card">
            <div class="card-body">

                <div class="table-responsive">
                    <table class="table border table-responsive-lg">
                        <thead>
                            <tr>
                                <th class="text-center">{{ __('SL') }}</th>
                                <th>{{ __('Thumbnail') }}</th>
                                <th>{{ __('Name') }}</th>
                                <th>{{ __('Start Date') }}</th>
                                <th>{{ __('End Date') }}</th>
                                @hasPermission('shop.flashSale.toggle')
                                    <th class="text-center">{{ __('Status') }}</th>
                                @endhasPermission
                                <th style="max-width: 250px">{{ __('Description') }}</th>
                                <th class="text-center">{{ __('Action') }}</th>
                            </tr>
                        </thead>
                        @forelse($flashsales as $key => $flashsale)
                            <tr>
                                <td class="text-center">{{ ++$key }}</td>

                                <td>
                                    <div class="product-image" style="width: 90px; height: 76px">
                                        <img src="{{ $flashsale->thumbnail }}" alt="thumbnail" style="width: 100%; height: 100%" loading="lazy"/>
                                    </div>
                                </td>

                                <td>{{ $flashsale->name }}</td>

                                <td>{{ $flashsale->start_date . ' - ' . $flashsale->start_time }}</td>
                                <td>{{ $flashsale->end_date . ' - ' . $flashsale->end_time }}</td>

                                @hasPermission('admin.flashSale.toggle')
                                    <td class="text-center">
                                        <label class="switch mb-0" data-bs-toggle="tooltip" data-bs-placement="left"
                                            data-bs-title="{{ __('Update Publish Status') }}">
                                            <a href="{{ route('admin.flashSale.toggle', $flashsale->id) }}">
                                                <input type="checkbox" {{ $flashsale->status ? 'checked' : '' }}>
                                                <span class="slider round"></span>
                                            </a>
                                        </label>
                                    </td>
                                @endhasPermission

                                <td style="max-width: 250px">
                                    {{ $flashsale->description ?? '--' }}
                                </td>

                                <td class="text-center">
                                    <div class="d-flex gap-2 justify-content-center">
                                        @hasPermission('admin.flashSale.product')
                                            <a href="{{ route('admin.flashSale.product', $flashsale->id) }}"
                                                class="btn btn-outline-primary circleIcon" data-bs-toggle="tooltip"
                                                data-bs-placement="left" data-bs-title="{{ __('View Product') }}">
                                                <i class="fa-regular fa-eye"></i>
                                            </a>
                                        @endhasPermission

                                        @hasPermission('admin.flashSale.edit')
                                            <a href="{{ route('admin.flashSale.edit', $flashsale->id) }}"
                                                class="btn btn-outline-primary circleIcon" data-bs-toggle="tooltip"
                                                data-bs-placement="left" data-bs-title="{{ __('Edit') }}">
                                                <i class="fa-solid fa-pen"></i>
                                            </a>
                                        @endhasPermission

                                        @hasPermission('admin.flashSale.destroy')
                                            <a href="{{ route('admin.flashSale.destroy', $flashsale->id) }}"
                                                class="btn btn-outline-danger circleIcon deleteConfirm" data-bs-toggle="tooltip"
                                                data-bs-placement="left" data-bs-title="{{ __('Delete') }}">
                                                <i class="fa-solid fa-trash-can"></i>
                                            </a>
                                        @endhasPermission
                                    </div>
                                </td>
                            </tr>
                        @empty
                            <tr>
                                <td class="text-center" colspan="100%">{{ __('No Data Found') }}</td>
                            </tr>
                        @endforelse
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <div class="my-3">
            {{ $flashsales->links() }}
        </div>

    </div>
@endsection
