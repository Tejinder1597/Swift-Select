import { trigger, state, style, animate, transition } from '@angular/animations';

export const textTransition = trigger('textTransition', [
    state('void', style({ opacity: 0, transform: 'translateY(-20px)' })),
    transition(':enter, :leave', [
        animate('0.5s ease-in-out')
    ])
]);