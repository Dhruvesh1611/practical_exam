#include<iostream>
using namespace std;

int id = -1;

class Node {
public:
    int data;
    Node* left;
    Node* right;

    Node(int value) {
        data = value;
        left = nullptr;
        right = nullptr;
    }
};

Node* insertNode(int arr[], int size) {
    ++id;
    if (id >= size || arr[id] == -1) {
        return nullptr;
    }

    Node* newNode = new Node(arr[id]);
    newNode->left = insertNode(arr, size);
    newNode->right = insertNode(arr, size);

    return newNode;
}

void inorder(Node* root) {
    if (root == nullptr) return;

    inorder(root->left);
    cout << root->data << " ";
    inorder(root->right);
}

void postorder(Node* root) {
    if (root == nullptr) return;

    postorder(root->left);
    postorder(root->right);
    cout << root->data << " ";
}

int main() {
    int arr[] = {1, 2, -1, -1, 3, -1, -1};
    int size = sizeof(arr) / sizeof(arr[0]);

    Node* root = insertNode(arr, size);

    cout << "Tree created successfully!";

    inorder(root);
    postorder(root);
    return 0;
}