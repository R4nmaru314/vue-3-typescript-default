import {Action, Module, Mutation, VuexModule} from 'vuex-class-modules';
import store from '@/store';

@Module
export class ExampleStoreModule extends VuexModule {

    helloWorld: string = '';

    @Mutation
    setHelloWorld(helloWorld: string) {
        this.helloWorld = helloWorld
    }

    @Action
    actionSetHelloWorld(helloWorld: string) {
        this.setHelloWorld(helloWorld)
    }

    get getHelloWorld() {
        return this.helloWorld;
    }
}

export const exampleStoreModule = new ExampleStoreModule({store, name: "example-store"});
