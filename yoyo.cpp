#include <iostream>
#include <pthread.h>

using namespace std;

void* threadFunction(void* arg) {
    int thread_id = *((int*)arg);
    cout << "Thread " << thread_id << " is running." << endl;
    cout << "Thread " << thread_id << " is terminating." << endl;
    pthread_exit(nullptr);
}

int main() {
    pthread_t thread1, thread2;
    int id1 = 1, id2 = 2;

    if (pthread_create(&thread1, nullptr, threadFunction, &id1) != 0) {
        cerr << "Failed to create thread 1!" << endl;
        return 1;
    }

    if (pthread_create(&thread2, nullptr, threadFunction, &id2) != 0) {
        cerr << "Failed to create thread 2!" << endl;
        return 1;
    }

    pthread_join(thread1, nullptr);
    pthread_join(thread2, nullptr);

    cout << "Main thread: All threads have terminated." << endl;

    return 0;
}